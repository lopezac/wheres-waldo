import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import TopNavbar from "./TopNavbar";

function Layout() {
  return (
    <div>
      <TopNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
