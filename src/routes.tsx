import { Routes, Route } from "react-router"
import { FormLayout } from "./components/common/FormLayout"
import Confirm from "./pages/Confirm"
import Request from "./pages/Request"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<FormLayout />}>
        <Route path='/' element={<Request />} />
        <Route path='confirm' element={<Confirm />} />
      </Route>
    </Routes>
  )
}
