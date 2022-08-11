import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Footer from "../Footer/index";
import TopNavbar from "../TopNavbar/index";
import Firebase from "./firebase";
import { theme } from "../Layout/theme";

function Layout() {
  return (
    <ThemeProvider theme={theme} >
      <div>
        <TopNavbar />
        <Outlet context={Firebase()} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Layout;
