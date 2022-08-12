import { Outlet } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Footer from "../Footer/index";
import TopNavbar from "../TopNavbar/index";
import Firebase from "./firebase";
import { theme } from "../Layout/theme";

const Main = styled.main`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <TopNavbar />
        <Outlet context={Firebase()} />
        <Footer />
      </Main>
    </ThemeProvider>
  );
}

export default Layout;
