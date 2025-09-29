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
  required?: boolean
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
  required,
}: Props) => {
  return (
    <MuiTextField
      id={id}
      name={name}
      // If the field is required, visually indicate it by appending "*" to the label.
      // This improves usability while keeping validation handled by react-hook-form + Zod.
      label={required && label ? `${label} *` : label}
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
