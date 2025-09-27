import { Button } from "./Button"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Button",
  },
}
