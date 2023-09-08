import Menu from "./components/Menu";
import Styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";

const Container = Styled.div`
  display:flex;
`;
const Main = Styled.div`
  flex:7;
  background-color:${({ theme }) => theme.bg}
`;
const Wrapper = Styled.div`
padding:20px 36px;
margin:20px 30px;
`;

function App() {
  const [DarkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={DarkMode ? darkTheme : lightTheme}>
      <Container>
        <Router>
          <Menu DarkMode={DarkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
