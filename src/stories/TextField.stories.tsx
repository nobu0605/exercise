import { TextField } from "../components/ui/TextField"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
  title: "UI/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "text-field",
    label: "Text Field",
    name: "text-field",
    error: false,
    disabled: false,
    variant: "outlined",
  },
}

export const Error: Story = {
  args: {
    id: "text-field-error",
    label: "Text Field Error",
    name: "text-field-error",
    error: true,
    disabled: false,
    variant: "outlined",
    helperText: "This field is required",
  },
}
