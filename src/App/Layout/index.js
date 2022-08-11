import { Outlet } from "react-router-dom";

import Footer from "../Footer/index";
import TopNavbar from "../TopNavbar/index";
import Firebase from "./firebase";

function Layout() {
  return (
    <div>
      <TopNavbar />
      <Outlet context={Firebase()} />
      <Footer />
    </div>
  );
}

export default Layout;
