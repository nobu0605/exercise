import { z } from "zod"
import { IssueType } from "./constants/form"

export const requestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email").min(1, "Email is required"),
  issueType: z.enum([IssueType.Bug, IssueType.Feature, IssueType.Inquiry]),
  tags: z.array(z.string()).optional(),
  stepsToReproduce: z
    .array(
      z.object({
        description: z.string().min(1, " description is required"),
      }),
    )
    .min(1, "At least one step is required"),
})

export type RequestFormValues = z.infer<typeof requestSchema>
