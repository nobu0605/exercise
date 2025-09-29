import { composeStories } from "@storybook/react"
import { render, screen, act } from "@testing-library/react"
import { createMemoryRouter, RouterProvider } from "react-router"
import { IssueType } from "../../constants/form"
import * as stories from "./RequestForm.stories"

const { Default, Errors, FilledForm } = composeStories(stories)

describe("RequestForm component", () => {
  it("renders empty form fields", () => {
    render(<Default />)

    expect(screen.getByLabelText(/Name input field/i)).toHaveValue("")
    expect(screen.getByLabelText(/Email input field/i)).toHaveValue("")
    expect(screen.getByRole("combobox", { name: /issue type/i })).toHaveTextContent(IssueType.Bug)
    expect(screen.getByLabelText(/Step 1 input field/i)).toHaveValue("")
    expect(screen.getByRole("button", { name: /continue/i })).toBeInTheDocument()
  })

  it("renders filled form values", () => {
    render(<FilledForm />)

    expect(screen.getByLabelText(/Name input field/i)).toHaveValue("Name")
    expect(screen.getByLabelText(/Email input field/i)).toHaveValue("test@gmail.com")
    expect(screen.getByRole("combobox", { name: /issue type/i })).toHaveTextContent(IssueType.Bug)
    expect(screen.getByText("UI")).toBeInTheDocument()
    expect(screen.getByText("Bug")).toBeInTheDocument()
    expect(screen.getByLabelText(/Step 1 input field/i)).toHaveValue("Step 1")
    expect(screen.getByLabelText(/Step 2 input field/i)).toHaveValue("Step 2")
  })

  it("shows validation errors in Errors story after submit", async () => {
    const router = createMemoryRouter([{ index: true, element: <Errors /> }])
    const { container } = render(<RouterProvider router={router} />)

    await act(async () => {
      await Errors.play?.({ canvasElement: container })
    })

    expect(screen.getByText("Name is required")).toBeInTheDocument()
    expect(screen.getByText("Invalid email")).toBeInTheDocument()
    expect(screen.getByText("Step 1 description is required")).toBeInTheDocument()
  })
})
