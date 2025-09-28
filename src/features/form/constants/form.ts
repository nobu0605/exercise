export const IssueType = {
  Bug: "Bug Report",
  Feature: "Feature Request",
  Inquiry: "General Inquiry",
} as const

export type IssueType = (typeof IssueType)[keyof typeof IssueType]

export const tagOptions = [
  "UI",
  "UX",
  "Performance",
  "Bug",
  "Feature Request",
  "Enhancement",
  "Documentation",
  "Security",
  "Other",
]
