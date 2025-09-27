import { TextField as MuiTextField } from "@mui/material"

type Props = {
  id: string
  name: string
  label: string
  error?: boolean
  variant?: "outlined" | "standard" | "filled"
  disabled?: boolean
  onClick?: () => void
  type?: string
  required?: boolean
}

export const TextField = ({
  id,
  name,
  label,
  error,
  disabled,
  onClick,
  variant = "outlined",
  type = "text",
  required,
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
      required={required}
    />
  )
}
