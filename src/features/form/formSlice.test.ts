import { IssueType } from "./constants/form"
import formReducer, { saveForm, clearForm, initialState } from "./formSlice"
import type { RequestFormValues } from "./schema"

describe("formSlice", () => {
  it("should return the initial state", () => {
    expect(formReducer(undefined, { type: "" })).toEqual(initialState)
  })

  it("should handle saveForm", () => {
    const payload: RequestFormValues = {
      name: "Kevin",
      email: "kevin@gmail.com",
      issueType: IssueType.Feature,
      tags: ["UI", "Performance"],
      stepsToReproduce: [{ description: "Step 1" }],
    }

    const updatedState = formReducer(initialState, saveForm(payload))
    expect(updatedState.formData).toEqual(payload)
  })

  it("should handle clearForm", () => {
    const filledState = {
      formData: {
        name: "John",
        email: "john@gmail.com",
        issueType: IssueType.Inquiry,
        tags: ["Bug"],
        stepsToReproduce: [{ description: "Do something" }],
      },
    }

    const nextState = formReducer(filledState, clearForm())
    expect(nextState).toEqual({
      ...initialState,
    })
  })
})
