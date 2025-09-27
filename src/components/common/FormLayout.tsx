import { Outlet } from "react-router"

export const FormLayout = () => (
  <div className='flex min-h-screen  justify-center '>
    <main className='w-full md:w-1/2 lg:w-1/3 p-10'>{<Outlet />}</main>
  </div>
)
