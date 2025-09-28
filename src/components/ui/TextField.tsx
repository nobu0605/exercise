import { TextField as MuiTextField } from "@mui/material"
import type { TextFieldProps } from "@mui/material/TextField"

type Props = {
  id: string
  name?: string
  label: string
  error?: boolean
  variant?: "outlined" | "standard" | "filled"
  disabled?: boolean
  onClick?: () => void
  type?: string
  helperText?: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  minRows?: number
  multiline?: boolean
  fullWidth?: boolean
  slotProps?: TextFieldProps["slotProps"]
}

export const TextField = ({
  id,
  name,
  label,
  error,
  disabled,
  onClick,
  variant,
  type = "text",
  helperText,
  value,
  onChange,
  minRows,
  multiline,
  fullWidth,
  slotProps,
}: Props) => {
  return (
    <MuiTextField
      id={id}
      name={name}
      label={label}
      error={error}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
      type={type}
      helperText={helperText}
      value={value}
      onChange={onChange}
      minRows={minRows}
      multiline={multiline}
      fullWidth={fullWidth}
      slotProps={slotProps}
    />
  )
}
