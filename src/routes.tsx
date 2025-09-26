import { Routes, Route } from "react-router"
import Confirm from "./pages/Confirm"
import Request from "./pages/Request"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Request />} />
      <Route path='confirm' element={<Confirm />} />
    </Routes>
  )
}
