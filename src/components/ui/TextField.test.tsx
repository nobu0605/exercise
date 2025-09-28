import { render, screen } from "@testing-library/react"
import { TextField } from "./TextField"

describe("TextField component", () => {
  it("renders with label", () => {
    render(<TextField id='text-field' name='text-field' label='Text Field' />)
    expect(screen.getByLabelText("Text Field")).toBeInTheDocument()
  })

  it("renders error state with helper text", () => {
    render(
      <TextField
        id='text-field-error'
        name='text-field-error'
        label='Text Field Error'
        error
        helperText='This field is required'
      />,
    )
    expect(screen.getByText("This field is required")).toBeInTheDocument()
  })
})
