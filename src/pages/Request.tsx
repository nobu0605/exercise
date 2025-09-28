import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { saveForm } from "../features/form/formSlice"
import { RequestForm } from "../features/form/request/components/RequestForm"
import type { RequestFormValues } from "../features/form/schema"
import type { AppDispatch, RootState } from "../store"

const Request = () => {
  const formData = useSelector((state: RootState) => state.form.formData)
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const onSubmit = (data: RequestFormValues) => {
    dispatch(saveForm(data))
    navigate("/confirm")
  }

  return (
    <div className='flex flex-col gap-8'>
      <header>
        <h1 className='text-2xl font-bold'>Support Request Form</h1>
      </header>
      <main>
        <RequestForm formData={formData} onSubmit={onSubmit} />
      </main>
    </div>
  )
}

export default Request
