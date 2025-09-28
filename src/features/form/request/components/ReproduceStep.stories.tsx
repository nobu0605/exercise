import { useState } from "react"
import { Button } from "../../../../components/ui/Button"
import { ReproduceStep } from "./ReproduceStep"
import type { StepsToReproduce } from "../../types/form"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
  component: ReproduceStep,
  argTypes: {
    removeStep: { action: "clicked" },
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof ReproduceStep>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: "",
    index: 0,
    removeStep: () => {},
    onChange: () => {},
    error: false,
    helperText: "",
  },
}

export const Error: Story = {
  args: {
    value: "",
    index: 0,
    removeStep: () => {},
    onChange: () => {},
    error: true,
    helperText: "This field is required",
  },
}

type Props = {
  initialSteps: StepsToReproduce
}

const StepsList = ({ initialSteps }: Props) => {
  const [steps, setSteps] = useState(initialSteps)

  return (
    <fieldset className='flex flex-col gap-4 w-96'>
      <legend className='mb-2'>Steps to Reproduce</legend>
      {steps.map((step, index) => (
        <ReproduceStep
          value={step.description}
          key={index}
          index={index}
          removeStep={() => {
            setSteps(steps.filter((_, i) => i !== index))
          }}
          onChange={(e) => {
            const newSteps = [...steps]
            newSteps[index].description = e.target.value
            setSteps(newSteps)
          }}
          error={false}
          helperText=''
        />
      ))}

      <div className='flex justify-end'>
        <Button
          color='inherit'
          onClick={() => setSteps([...steps, { description: "" }])}
          variant='outlined'
          disabled={steps.length >= 5}
        >
          Add Step
        </Button>
      </div>
    </fieldset>
  )
}

export const StepsToReproduceStory: Story = {
  args: {
    value: "",
    index: 0,
    removeStep: () => {},
    onChange: () => {},
    error: false,
    helperText: "",
  },
  render: () => {
    return <StepsList initialSteps={[{ description: "" }, { description: "" }]} />
  },
}

export const MaxStepsToReproduce: Story = {
  args: {
    value: "",
    index: 0,
    removeStep: () => {},
    onChange: () => {},
    error: false,
    helperText: "",
  },
  render: () => {
    return (
      <StepsList
        initialSteps={[
          { description: "" },
          { description: "" },
          { description: "" },
          { description: "" },
          { description: "" },
        ]}
      />
    )
  },
}
