import { Button as MuiButton } from "@mui/material"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode | string
  variant?: "text" | "outlined" | "contained"
  size?: "small" | "medium" | "large"
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning"
  disabled?: boolean
  onClick?: () => void
  type?: "submit" | "reset" | "button" | undefined
}

export function Button({
  children,
  variant = "contained",
  size = "medium",
  color = "primary",
  disabled,
  onClick,
  type,
}: Props) {
  return (
    <MuiButton
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </MuiButton>
  )
}
