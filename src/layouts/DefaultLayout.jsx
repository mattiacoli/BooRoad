import { Outlet } from "react-router-dom";
import Header from "../components/Headers";
import Sidebar from "../components/Sidebar";


export default function DefaultLayout() {
  return (
    <>
      <Header />

      <main style={{ minHeight: '80vh' }}>
        <div className="row bg-light">
          <div className="col-3 col-sm-2" style={{ width: '120px', boxShadow: '2px 2px 0 var(--br-primary)' }}>
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