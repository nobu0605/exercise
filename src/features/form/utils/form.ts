import { initialFormData } from "../constants/form"
import type { RequestFormValues } from "../schema"

export const isFormDirty = (formData: RequestFormValues): boolean => {
  return JSON.stringify(formData) !== JSON.stringify(initialFormData)
}
