import { initialFormData, IssueType, tagOptions } from "../../constants/form"
import { ConfirmBody } from "./ConfirmBody"
import type { Meta, StoryObj } from "@storybook/react-vite"
import type { ReactNode } from "react"

const meta = {
  component: ConfirmBody,
} satisfies Meta<typeof ConfirmBody>

export default meta
type Story = StoryObj<typeof meta>

type Props = {
  children: ReactNode
}

const ConfirmBodyLayout = ({ children }: Props) => (
  <div className='flex min-h-screen  justify-center'>
    <div className='w-full md:w-1/2 lg:w-1/3 p-10'>{children}</div>
  </div>
)

export const Default: Story = {
  args: {
    formData: {
      name: "Kevin",
      email: "kevin@example.com",
      issueType: IssueType.Bug,
      tags: [tagOptions[0], tagOptions[3]],
      stepsToReproduce: [
        { description: "Open the app" },
        { description: "Click on the button" },
        { description: "Observe the error" },
      ],
    },
    handleSubmit: () => {},
  },
  render: (args) => {
    return (
      <ConfirmBodyLayout>
        <ConfirmBody formData={args.formData} handleSubmit={args.handleSubmit} />
      </ConfirmBodyLayout>
    )
  },
}

export const NoFormData: Story = {
  args: {
    formData: initialFormData,
    handleSubmit: () => {},
  },
  render: (args) => {
    return (
      <ConfirmBodyLayout>
        <ConfirmBody formData={args.formData} handleSubmit={args.handleSubmit} />
      </ConfirmBodyLayout>
    )
  },
}
