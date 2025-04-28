import { Outlet } from "react-router-dom";
import Header from "../components/Headers";
import Sidebar from "../components/Sidebar";


export default function DefaultLayout() {
  return (
    <>
      <Header />

      <main style={{ minHeight: '80vh' }}>
        <div className="row">
          <div className="col-2 col-sm-1 border">
            <Sidebar />
          </div>

          <div className="col-10">
            <Outlet />
          </div>
        </div>
      </main>

    </>
  )
}