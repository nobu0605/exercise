import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router"
import Confirm from "./pages/Confirm"
import Request from "./pages/Request"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Request />} />
        <Route path='confirm' element={<Confirm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
