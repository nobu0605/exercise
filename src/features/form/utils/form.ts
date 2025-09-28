import { initialState } from "../formSlice"
import type { RequestFormValues } from "../schema"

export const isFormDirty = (formData: RequestFormValues): boolean => {
  return JSON.stringify(formData) !== JSON.stringify(initialState.formData)
}
