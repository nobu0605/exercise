import Alert from "@mui/material/Alert"
import { useEffect, useState, type FormEvent } from "react"
import { useNavigate } from "react-router"
import { Button } from "../../../../components/ui/Button"
import { isFormDirty } from "../../utils/form"
import type { RequestFormValues } from "../../schema"

type Props = {
  formData: RequestFormValues
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const ConfirmBody = ({ formData, handleSubmit }: Props) => {
  const navigate = useNavigate()
  const [showSubmissionAlert, setShowSubmissionAlert] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const isFormChanged = isFormDirty(formData)

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isFormChanged) {
        e.preventDefault()
        e.returnValue = ""
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => window.removeEventListener("beforeunload", handleBeforeUnload)
  }, [isFormChanged])

  if (!formData || (isFormChanged === false && !isSubmitted)) {
    return (
      <div className='flex flex-col gap-4'>
        <p className='text-red-500'>No form data found. Please start again.</p>
        <div className='flex justify-start'>
          <Button color='inherit' onClick={() => navigate("/")}>
            Back
          </Button>
        </div>
      </div>
    )
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    handleSubmit(e)
    setIsSubmitted(true)
    setShowSubmissionAlert(true)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='flex flex-col gap-4 text-lg'>
          <section className='flex flex-col gap-2'>
            <h2 className='text-lg font-semibold'>Personal Information</h2>
            <dl className='flex flex-col gap-2'>
              <div className='flex flex-row gap-2'>
                <dt>Name:</dt>
                <dd>{formData.name}</dd>
              </div>
              <div className='flex flex-row gap-2'>
                <dt>Email:</dt>
                <dd>{formData.email}</dd>
              </div>
            </dl>
          </section>

          <section className='flex flex-col gap-2'>
            <h2 className='text-lg font-semibold'>Issue Details</h2>
            <dl className='flex flex-col gap-2'>
              <div className='flex flex-row gap-2'>
                <dt>Issue Type:</dt>
                <dd>{formData.issueType}</dd>
              </div>
              <div className='flex flex-row gap-2'>
                <dt>Tags:</dt>
                <dd>{formData.tags?.join(", ")}</dd>
              </div>
            </dl>
          </section>

          <section className='flex flex-col gap-2'>
            <h2 className='text-lg font-semibold'>Steps to Reproduce</h2>
            <ol className='list-decimal list-inside'>
              {formData.stepsToReproduce?.map((step, index) => (
                <li key={index}>{step.description}</li>
              ))}
            </ol>
          </section>

          <div className='flex gap-4 mt-4'>
            <Button color='inherit' onClick={() => navigate(-1)}>
              Back
            </Button>
            <Button type='submit' color='primary'>
              Submit Request
            </Button>
          </div>
        </div>
      </form>

      {showSubmissionAlert && (
        <div className='absolute top-0 left-0 w-500px w-full flex justify-center mt-4'>
          <Alert severity='success' onClose={() => setShowSubmissionAlert(false)}>
            Your request has been submitted successfully!
          </Alert>
        </div>
      )}
    </>
  )
}
