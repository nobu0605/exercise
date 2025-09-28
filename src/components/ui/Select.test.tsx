import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "./Select.stories"

const { Default, Error } = composeStories(stories)

describe("Select stories", () => {
  it("renders Default story", () => {
    render(<Default />)
    expect(screen.getByLabelText("Select an option")).toBeInTheDocument()
  })

  it("renders Error story with error message", () => {
    render(<Error />)
    const errorMessage = screen.getByText("This field is required")
    expect(errorMessage).toBeInTheDocument()
  })
})
