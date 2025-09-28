import { describe, it, expect } from "vitest"
import { IssueType } from "../constants/form"
import { initialState } from "../formSlice"
import { isFormDirty } from "./form"
import type { RequestFormValues } from "../schema"

describe("isFormDirty", () => {
  it("should return false when formData equals initial state", () => {
    const formData: RequestFormValues = { ...initialState.formData }
    expect(isFormDirty(formData)).toBe(false)
  })

  it("should return true when name is different", () => {
    const formData: RequestFormValues = {
      ...initialState.formData,
      name: "Taro",
    }
    expect(isFormDirty(formData)).toBe(true)
  })

  it("should return true when email is different", () => {
    const formData: RequestFormValues = {
      ...initialState.formData,
      email: "taro@example.com",
    }
    expect(isFormDirty(formData)).toBe(true)
  })

  it("should return true when issueType is different", () => {
    const formData: RequestFormValues = {
      ...initialState.formData,
      issueType: IssueType.Feature,
    }
    expect(isFormDirty(formData)).toBe(true)
  })

  it("should return true when tags are different", () => {
    const formData: RequestFormValues = {
      ...initialState.formData,
      tags: ["UI", "Bug"],
    }
    expect(isFormDirty(formData)).toBe(true)
  })

  it("should return true when stepsToReproduce are different", () => {
    const formData: RequestFormValues = {
      ...initialState.formData,
      stepsToReproduce: [{ description: "Step 1" }],
    }
    expect(isFormDirty(formData)).toBe(true)
  })
})
