import { Outlet } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Footer from "../Footer/index";
import TopNavbar from "../TopNavbar/index";
import Firebase from "./firebase";
import { theme } from "../Layout/theme";

const Main = styled.main`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

const StyledOutlet = styled.div(
  ({ theme }) => `
  grid-area: content;
  background-color: ${theme.lighterZinc};
`
);

function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <TopNavbar />
        <StyledOutlet>
          <Outlet context={Firebase()} />
        </StyledOutlet>
        <Footer />
      </Main>
    </ThemeProvider>
  );
}

export default Layout;
