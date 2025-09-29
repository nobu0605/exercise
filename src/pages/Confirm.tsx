import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { ConfirmBody } from "../features/form/confirm/components/ConfirmBody"
import { clearForm } from "../features/form/formSlice"
import type { AppDispatch, RootState } from "../store"
import type { FormEvent } from "react"

const Confirm = () => {
  const formData = useSelector((state: RootState) => state.form.formData)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setTimeout(() => {
      dispatch(clearForm())
      navigate("/")
    }, 1500)
  }

  return (
    <div className='flex flex-col gap-8'>
      <header>
        <h1 className='text-2xl font-bold'>Confirm Your Request</h1>
      </header>
      <main>
        <ConfirmBody handleSubmit={handleSubmit} formData={formData} />
      </main>
    </div>
  )
}

export default Confirm
