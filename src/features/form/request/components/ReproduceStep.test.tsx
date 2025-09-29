import { composeStories } from "@storybook/react"
import { fireEvent, render, screen } from "@testing-library/react"
import * as stories from "./ReproduceStep.stories"

const { Default, NoFieldValueError, StepsToReproduceStory, MaxStepsToReproduce } =
  composeStories(stories)

describe("ReproduceStep component", () => {
  it("renders with description", () => {
    render(<Default />)
    expect(screen.getByLabelText("Step 1 *")).toBeInTheDocument()
  })

  it("shows required error", () => {
    render(<NoFieldValueError />)
    expect(screen.getByText("This field is required")).toBeInTheDocument()
  })

  it("add step", () => {
    render(<StepsToReproduceStory />)

    const initialTextFields = screen.getAllByRole("textbox")
    expect(initialTextFields.length).toBe(2)

    const button = screen.getByRole("button", { name: /add step/i })
    fireEvent.click(button)

    const updatedTextFields = screen.getAllByRole("textbox")
    expect(updatedTextFields.length).toBe(3)
  })

  it("remove step", () => {
    render(<StepsToReproduceStory />)

    const initialTextFields = screen.getAllByRole("textbox")
    expect(initialTextFields.length).toBe(2)

    const removeButton = screen.getByLabelText("Remove step 2")
    fireEvent.click(removeButton)

    const updatedTextFields = screen.getAllByRole("textbox")
    expect(updatedTextFields.length).toBe(1)
  })

  it("add button is disabled when the number of steps is 5", () => {
    render(<MaxStepsToReproduce />)

    const addButton = screen.getByRole("button", { name: /add step/i })
    expect(addButton).toBeDisabled()
  })
})
