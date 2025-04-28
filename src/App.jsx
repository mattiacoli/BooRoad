import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Trip from "./pages/Trip";
import AddTrip from "./pages/AddTrip";
import NotFound from "./pages/404";
import { TripProvider } from "./contexts/TripContext";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <TripProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={Home} />
              <Route path="/dashboard" Component={Dashboard} />
              <Route path="/:id/trip" Component={Trip} />
              <Route path="/addtrip" Component={AddTrip} />
              <Route path="*" Component={NotFound} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TripProvider>
    </>
  );
}

export default App;
