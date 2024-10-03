import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./index.css";


export default function Layout(): JSX.Element {
  return (
    <div className="layout">
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div >
  );
}
