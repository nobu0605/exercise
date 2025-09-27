import { RequestForm } from "../features/form/request/components/RequestForm"

const Request = () => {
  return (
    <div className='flex flex-col gap-8'>
      <header>
        <h1 className='text-2xl font-bold'>Support Request Form</h1>
      </header>
      <main>
        <RequestForm />
      </main>
    </div>
  )
}

export default Request
