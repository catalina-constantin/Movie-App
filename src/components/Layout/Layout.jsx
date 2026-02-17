import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
