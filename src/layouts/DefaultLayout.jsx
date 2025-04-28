import { Outlet } from "react-router-dom";
import Header from "../components/Headers";


export default function DefaultLayout() {
  return (
    <>
      <Header />

      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>

    </>
  )
}