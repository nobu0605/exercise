import { createSlice } from "@reduxjs/toolkit"
import { initialFormData } from "./constants/form"
import type { RequestFormValues } from "./schema"
import type { PayloadAction } from "@reduxjs/toolkit"

export type FormState = {
  formData: RequestFormValues
}

export const initialState: FormState = {
  formData: initialFormData,
}

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveForm: (state, action: PayloadAction<RequestFormValues>) => {
      state.formData = action.payload
    },
    clearForm: (state) => {
      state.formData = { ...initialState.formData }
    },
  },
})

export const { saveForm, clearForm } = formSlice.actions
export default formSlice.reducer
