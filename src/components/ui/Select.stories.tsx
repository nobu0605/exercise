import { Select } from "./Select"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
  component: Select,
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: "",
    id: "select",
    labelId: "select-label",
    label: "Select an option",
    menuItems: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleChange: () => {},
  },
  render: (args) => (
    <div style={{ width: "200px" }}>
      <Select {...args} />
    </div>
  ),
}

export const Error: Story = {
  args: {
    value: "",
    id: "select",
    labelId: "select-label",
    label: "Select an option",
    menuItems: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleChange: () => {},
    error: true,
    errorText: "This field is required",
  },
  render: (args) => (
    <div style={{ width: "200px" }}>
      <Select {...args} />
    </div>
  ),
}
