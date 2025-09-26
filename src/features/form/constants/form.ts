export const IssueType = {
  Bug: "Bug Report",
  Feature: "Feature Request",
  Inquiry: "General Inquiry",
  None: "",
} as const

export type IssueType = (typeof IssueType)[keyof typeof IssueType]
