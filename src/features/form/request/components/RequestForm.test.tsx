import { composeStories } from "@storybook/react"
import { render, screen, fireEvent } from "@testing-library/react"
import * as stories from "./RequestForm.stories"

const { Default, Errors, FilledForm } = composeStories(stories)

describe("RequestForm component", () => {
  it("renders empty form fields", () => {
    render(<Default />)

    expect(screen.getByLabelText(/Name input field/i)).toHaveValue("")
    expect(screen.getByLabelText(/Email input field/i)).toHaveValue("")
    expect(screen.getByRole("combobox", { name: /issue type/i })).toHaveTextContent("Bug Report")
    expect(screen.getByLabelText(/Step 1 input field/i)).toHaveValue("")
    expect(screen.getByRole("button", { name: /continue/i })).toBeInTheDocument()
  })

  it("renders filled form values", () => {
    render(<FilledForm />)

    expect(screen.getByLabelText(/Name input field/i)).toHaveValue("Name")
    expect(screen.getByLabelText(/Email input field/i)).toHaveValue("test@gmail.com")
    expect(screen.getByRole("combobox", { name: /issue type/i })).toHaveTextContent("Bug Report")
    expect(screen.getByText("UI")).toBeInTheDocument()
    expect(screen.getByText("Bug")).toBeInTheDocument()
    expect(screen.getByLabelText(/Step 1 input field/i)).toHaveValue("Step 1")
    expect(screen.getByLabelText(/Step 2 input field/i)).toHaveValue("Step 2")
  })

  it("shows validation errors in Errors story after submit", async () => {
    render(<Errors />)

    const button = screen.getByRole("button", { name: /continue/i })
    fireEvent.click(button)

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument()
    expect(await screen.findByText(/Invalid email/i)).toBeInTheDocument()
    expect(await screen.findByText(/description is required/i)).toBeInTheDocument()
  })
})
