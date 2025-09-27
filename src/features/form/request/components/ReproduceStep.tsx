import CancelIcon from "@mui/icons-material/Cancel"
import { IconButton } from "@mui/material"
import { Controller, type Control } from "react-hook-form"
import { TextField } from "../../../../components/ui/TextField"
import type { RequestFormValues } from "../schema"

type Props = {
  control: Control<RequestFormValues>
  index: number
  removeStep: () => void
}

export const ReproduceStep = ({ control, index, removeStep }: Props) => {
  return (
    <div className='relative flex flex-row'>
      {index > 0 && (
        <div className='absolute top-1 right-1 z-10'>
          <IconButton aria-label={`Remove step ${index + 1}`} size='small' onClick={removeStep}>
            <CancelIcon fontSize='medium' />
          </IconButton>
        </div>
      )}
      <Controller
        name={`stepsToReproduce.${index}.description`}
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            onChange={field.onChange}
            label={`Step ${index + 1}`}
            id={`steps.${index}`}
            name={`steps.${index}`}
            minRows={4}
            multiline
            fullWidth
            error={!!fieldState.error}
            helperText={fieldState.error ? `Step ${index + 1} ${fieldState.error?.message}` : ""}
          />
        )}
      />
    </div>
  )
}
