import { createSlice } from "@reduxjs/toolkit"
import { IssueType } from "./constants/form"
import type { PayloadAction } from "@reduxjs/toolkit"

type FormState = {
  name: string
  email: string
  issueType: IssueType
  tags: string[]
  stepsToReproduce: string
}

const initialState: FormState = {
  name: "",
  email: "",
  issueType: IssueType.Bug,
  tags: [],
  stepsToReproduce: "",
}

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setIssueType: (state, action: PayloadAction<IssueType>) => {
      state.issueType = action.payload
    },
    setTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload
    },
    setStepsToReproduce: (state, action: PayloadAction<string>) => {
      state.stepsToReproduce = action.payload
    },
  },
})

export const { setName, setEmail, setIssueType, setTags, setStepsToReproduce } = formSlice.actions
export default formSlice.reducer
