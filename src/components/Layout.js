import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import TopNavbar from "./TopNavbar";
import Firebase from "../firebase-func";

function Layout() {
  return (
    <div>
      <TopNavbar />
      <Outlet context={Firebase()}/>
      <Footer />
    </div>
  );
}

export default Layout;
