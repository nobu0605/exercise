import CancelIcon from "@mui/icons-material/Cancel"
import { IconButton } from "@mui/material"
import { TextField } from "../../../../components/ui/TextField"

type Props = {
  value: string
  index: number
  removeStep: () => void
  onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined
  error?: boolean | undefined
  helperText?: string | undefined
}

export const ReproduceStep = ({ value, index, removeStep, onChange, error, helperText }: Props) => {
  return (
    <div className='relative flex flex-row'>
      {index > 0 && (
        <div className='absolute top-1 right-1 z-10'>
          <IconButton aria-label={`Remove step ${index + 1}`} size='small' onClick={removeStep}>
            <CancelIcon fontSize='medium' />
          </IconButton>
        </div>
      )}
      <TextField
        value={value}
        onChange={onChange}
        label={`Step ${index + 1}`}
        id={`stepsToReproduce.${index}`}
        minRows={4}
        multiline
        fullWidth
        error={error}
        helperText={helperText}
        slotProps={{ htmlInput: { "aria-label": `Step ${index + 1} input field` } }}
      />
    </div>
  )
}
