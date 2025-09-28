import { describe, it, expect } from "vitest"
import * as z from "zod"
import { IssueType } from "./constants/form"
import { requestSchema } from "./schema"

describe("Request Schema", () => {
  it("passes with valid data", () => {
    const validData = {
      name: "Taro",
      email: "taro@example.com",
      issueType: IssueType.Bug,
      tags: ["UI", "Bug"],
      stepsToReproduce: [{ description: "Open the app" }],
    }

    expect(() => requestSchema.parse(validData)).not.toThrow()
  })

  it("fails when name is empty", () => {
    const invalidData = {
      name: "",
      email: "taro@example.com",
      issueType: IssueType.Bug,
      stepsToReproduce: [{ description: "Open the app" }],
    }

    const result = requestSchema.safeParse(invalidData)
    expect(result.success).toBe(false)

    if (!result.success) {
      const tree = z.treeifyError(result.error)
      const nameErrors = tree.properties?.name?.errors ?? []
      expect(nameErrors).toContain("Name is required")
    }
  })

  it("fails when email is invalid", () => {
    const invalidData = {
      name: "Taro",
      email: "not-an-email",
      issueType: IssueType.Feature,
      stepsToReproduce: [{ description: "Do something" }],
    }

    const result = requestSchema.safeParse(invalidData)
    expect(result.success).toBe(false)

    if (!result.success) {
      const tree = z.treeifyError(result.error)
      const emailErrors = tree.properties?.email?.errors ?? []
      expect(emailErrors).toContain("Invalid email")
    }
  })

  it("fails when stepsToReproduce is empty", () => {
    const invalidData = {
      name: "Taro",
      email: "taro@example.com",
      issueType: IssueType.Inquiry,
      stepsToReproduce: [],
    }

    const result = requestSchema.safeParse(invalidData)
    expect(result.success).toBe(false)

    if (!result.success) {
      const tree = z.treeifyError(result.error)
      const stepsErrors = tree.properties?.stepsToReproduce?.errors ?? []
      expect(stepsErrors).toContain("At least one step is required")
    }
  })

  it("fails when step description is empty", () => {
    const invalidData = {
      name: "Taro",
      email: "taro@example.com",
      issueType: IssueType.Bug,
      stepsToReproduce: [{ description: "" }],
    }

    const result = requestSchema.safeParse(invalidData)
    expect(result.success).toBe(false)

    if (!result.success) {
      const tree = z.treeifyError(result.error)
      const items = tree.properties?.stepsToReproduce?.items
      if (items) {
        const firstItem = items[0]
        const descErrors = firstItem?.properties?.description?.errors ?? []
        expect(descErrors).toContain(" description is required")
      } else {
        throw new Error("No items in tree for stepsToReproduce")
      }
    }
  })
})
