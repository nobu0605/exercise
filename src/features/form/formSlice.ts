import { createSlice } from "@reduxjs/toolkit"
import { IssueType } from "./constants/form"
import type { RequestFormValues } from "../form/request/schema"
import type { PayloadAction } from "@reduxjs/toolkit"

type FormState = {
  formData: RequestFormValues
}

const initialState: FormState = {
  formData: {
    name: "",
    email: "",
    issueType: IssueType.Bug,
    tags: [],
    stepsToReproduce: [],
  },
}

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveForm: (state, action: PayloadAction<RequestFormValues>) => {
      console.log("formData slice: ", action.payload)
      state.formData = action.payload
    },
    clearForm: (state) => {
      state.formData = { ...initialState.formData }
    },
  },
})

export const { saveForm, clearForm } = formSlice.actions
export default formSlice.reducer
