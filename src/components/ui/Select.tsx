import { Select as MuiSelect } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
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
  required?: boolean
  error?: boolean
}

export const Select = ({
  handleChange,
  labelId,
  id,
  value,
  label,
  menuItems,
  required,
  error,
}: Props) => {
  return (
    <>
      <FormControl fullWidth error={error}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <MuiSelect
          required={required}
          labelId={labelId}
          id={id}
          value={value}
          label={label}
          onChange={handleChange}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </>
  )
}
