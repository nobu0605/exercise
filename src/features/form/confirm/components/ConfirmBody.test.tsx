import { composeStories } from "@storybook/react"
import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import * as stories from "./ConfirmBody.stories"

const { Default, NoFormData } = composeStories(stories)

describe("ConfirmBody component", () => {
  it("renders with filled form data", () => {
    render(
      <MemoryRouter>
        <Default />
      </MemoryRouter>,
    )

    // Personal Information
    expect(screen.getByText(/Name:/i)).toBeInTheDocument()
    expect(screen.getByText("Kevin")).toBeInTheDocument()
    expect(screen.getByText(/Email:/i)).toBeInTheDocument()
    expect(screen.getByText("kevin@example.com")).toBeInTheDocument()

    // Issue Details
    expect(screen.getByText(/Issue Type:/i)).toBeInTheDocument()
    expect(screen.getByText("Bug Report")).toBeInTheDocument()

    // Tags
    expect(screen.getByText(/Tags:/i)).toBeInTheDocument()
    expect(screen.getByText("UI, Bug")).toBeInTheDocument()

    // Steps
    expect(screen.getByText(/Steps to Reproduce/i)).toBeInTheDocument()
    expect(screen.getByText("Open the app")).toBeInTheDocument()
    expect(screen.getByText("Click on the button")).toBeInTheDocument()
    expect(screen.getByText("Observe the error")).toBeInTheDocument()

    // Buttons
    expect(screen.getByRole("button", { name: /Back/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Submit Request/i })).toBeInTheDocument()
  })

  it("renders fallback message when no form data", () => {
    render(
      <MemoryRouter>
        <NoFormData />
      </MemoryRouter>,
    )

    expect(screen.getByText(/No form data found/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Back/i })).toBeInTheDocument()
  })

  it("shows success alert after submit", () => {
    const mockHandleSubmit = vi.fn()

    render(
      <MemoryRouter>
        <Default handleSubmit={mockHandleSubmit} />
      </MemoryRouter>,
    )

    fireEvent.submit(screen.getByRole("button", { name: /Submit Request/i }))

    expect(mockHandleSubmit).toHaveBeenCalled()
    expect(screen.getByText(/Your request has been submitted successfully!/i)).toBeInTheDocument()
  })
})
