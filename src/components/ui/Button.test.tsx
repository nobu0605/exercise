import { composeStories } from "@storybook/react"
import { render, screen, fireEvent } from "@testing-library/react"
import * as stories from "./Button.stories"

const { Default } = composeStories(stories)

describe("Button component", () => {
  it("renders the Default story", () => {
    render(<Default />)
    expect(screen.getByRole("button", { name: /button/i })).toBeInTheDocument()
  })

  it("handles click events", () => {
    const handleClick = vi.fn()
    render(<Default onClick={handleClick} />)

    const button = screen.getByRole("button", { name: /button/i })
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
