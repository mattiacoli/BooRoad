import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import Trip from './pages/Trip'
import AddTrip from "./pages/AddTrip"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />
            <Route path="/:id/trip" Component={Trip} />
            <Route path="/addtrip" Component={AddTrip} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
