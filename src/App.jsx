import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import Trip from './pages/Trip'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />
            <Route path="/trip" Component={Trip} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
