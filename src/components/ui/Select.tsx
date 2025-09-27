import {
  Select as MuiSelect,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
} from "@mui/material"
import type { SelectChangeEvent } from "@mui/material"

type MenuItemType = {
  value: string | number
  label: string
}

type Props = {
  handleChange: (event: SelectChangeEvent<string | number>) => void
  labelId: string
  id: string
  value: string | number
  label: string
  menuItems: MenuItemType[]
  error?: boolean
  errorText?: string
}

export const Select = ({
  handleChange,
  labelId,
  id,
  value,
  label,
  menuItems,
  error,
  errorText,
}: Props) => {
  return (
    <>
      <FormControl fullWidth error={error}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <MuiSelect labelId={labelId} id={id} value={value} label={label} onChange={handleChange}>
          {menuItems.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </MuiSelect>
        <FormHelperText>{errorText}</FormHelperText>
      </FormControl>
    </>
  )
}
