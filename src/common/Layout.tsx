import Nav from "./Nav"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import Onpages from "../pages/Onpages"
export default function Layout() {
  return (
    <>
    <Nav/>
    <Outlet/>
    {/* <Onpages /> */}
    <Footer/>
    </>
  )
}
