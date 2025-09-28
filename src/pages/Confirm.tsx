import { ConfirmBody } from "../features/form/confirm/components/ConfirmBody"

const Confirm = () => {
  return (
    <div className='flex flex-col gap-8'>
      <header>
        <h1 className='text-2xl font-bold'>Confirm Your Request</h1>
      </header>
      <main>
        <ConfirmBody />
      </main>
    </div>
  )
}

export default Confirm
