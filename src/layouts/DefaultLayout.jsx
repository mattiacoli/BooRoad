import { Outlet } from "react-router-dom";
import Header from "../components/Headers";
import Footer from "../components/Footer";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}