import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "./TextField.stories"

const { Default, Error } = composeStories(stories)

describe("TextField component", () => {
  it("renders with label", () => {
    render(<Default />)
    expect(screen.getByLabelText("Text Field")).toBeInTheDocument()
  })

  it("renders error state with helper text", () => {
    render(<Error />)
    expect(screen.getByText("This field is required")).toBeInTheDocument()
  })
})
