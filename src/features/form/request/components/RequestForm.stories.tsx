import { userEvent, within } from "storybook/test"
import { IssueType, tagOptions } from "../../constants/form"
import { RequestForm } from "./RequestForm"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
  component: RequestForm,
} satisfies Meta<typeof RequestForm>

export default meta
type Story = StoryObj<typeof meta>

type Props = {
  children: React.ReactNode
}

const RequestFormLayout = ({ children }: Props) => (
  <div className='flex min-h-screen  justify-center'>
    <div className='w-full md:w-1/2 lg:w-1/3 p-10'>{children}</div>
  </div>
)

export const Default: Story = {
  args: {
    formData: null,
    onSubmit: () => {},
  },
  render: (args) => {
    return (
      <RequestFormLayout>
        <RequestForm formData={args.formData} onSubmit={args.onSubmit} />
      </RequestFormLayout>
    )
  },
}

export const FilledForm: Story = {
  args: {
    formData: {
      name: "Name",
      email: "test@gmail.com",
      issueType: IssueType.Bug,
      tags: [tagOptions[0], tagOptions[3]],
      stepsToReproduce: [
        {
          description: "Step 1",
        },
        {
          description: "Step 2",
        },
      ],
    },
    onSubmit: () => {},
  },
  render: (args) => {
    return (
      <RequestFormLayout>
        <RequestForm formData={args.formData} onSubmit={args.onSubmit} />
      </RequestFormLayout>
    )
  },
}

export const Errors: Story = {
  args: {
    formData: {
      name: "",
      email: "",
      issueType: IssueType.Bug,
      tags: [],
      stepsToReproduce: [
        {
          description: "",
        },
      ],
    },
    onSubmit: () => {},
  },
  render: (args) => {
    return (
      <RequestFormLayout>
        <RequestForm formData={args.formData} onSubmit={args.onSubmit} />
      </RequestFormLayout>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const SubmitButton = canvas.getByText("Continue")

    await userEvent.click(SubmitButton)
  },
}
