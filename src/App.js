import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./components/styles/Global";
import { Header } from "./components/styles/Header.styled";
import { Footer } from "./components/styles/Footer.styled";
import {
  ThemeContainer,
  ThemeButton,
} from "./components/styles/ThemeSwitching.styled";
import { ThemeProvider } from "styled-components";
import {
  contrastPrimary, contrastSecondary, darkPrimary, darkSecondary, lightPrimary, lightSecondary
} from "./components/styles/Theme.styled";
import Main from "./components/Main";
import {
  CardsContainer,
  Card,
  CardTitle,
  CardBody,
} from "../src/components/styles/Cards.styled";
import "../src/App.css";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(darkPrimary);
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);
  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };
  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="App">
        <GlobalStyles />
        <Header>Theme Switch Based on Colour Selection</Header>
        <Header>NOTE:In this project,i have not used any Libraries for styles and components</Header>
        <Main />
        <CardsContainer style={{ border: "solid", borderRadius: "6px",boxShadow:
        " 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)", }}>
          <Card>
            <CardTitle>CHANING THEME BASED ON COLORS</CardTitle>
            <CardBody>
              <ThemeContainer >
                <span>Themes: </span>
                <Card >
                  <span>CONTRAST: </span>
                  <ThemeButton style={{
                    height: "50px", width: "100px",
                    color: "white",
                    background: "grey",

                  }}
                    className={`contrastPrimary ${selectedTheme === contrastPrimary ? "active" : ""}`}
                    onClick={() => HandleThemeChange(contrastPrimary)}>PRIMARY</ThemeButton>
                  <ThemeButton style={{
                    height: "50px", width: "100px",
                    color: "white",
                    background: "grey",

                  }}
                    className={`contrastSecondary ${selectedTheme === contrastSecondary ? "active" : ""}`}
                    onClick={() => HandleThemeChange(contrastSecondary)}>SECONDARY</ThemeButton>
                </Card>
                <Card>
                  <span>DARK: </span>
                  <ThemeButton style={{
                    height: "50px", width: "100px",
                    color: "white",
                    background: "grey",
                    marginLeft: "30px",
                  }}
                    className={`darkPrimary ${selectedTheme === darkPrimary ? "active" : ""}`}
                    onClick={() => HandleThemeChange(darkPrimary)}>PRIMARY</ThemeButton>
                  <ThemeButton style={{
                    height: "50px", width: "100px",
                    color: "white",
                    background: "grey",

                  }}
                    className={`darkSecondary ${selectedTheme === darkSecondary ? "active" : ""}`}
                    onClick={() => HandleThemeChange(darkSecondary)}>SECONDARY</ThemeButton>
                </Card>
                <Card>
                  <span>LIGHT: </span>
                  <ThemeButton style={{
                    height: "50px", width: "100px",
                    color: "white",
                    background: "grey",
                    marginLeft: "24px",
                  }}
                    className={`lightPrimary ${selectedTheme === lightPrimary ? "active" : ""}`}
                    onClick={() => HandleThemeChange(lightPrimary)}>PRIMARY</ThemeButton>
                  <ThemeButton style={{
                    height: "50px", width: "100px",
                    color: "white",
                    background: "grey",
                  }}
                    className={`lightSecondary ${selectedTheme === lightSecondary ? "active" : ""}`}
                    onClick={() => HandleThemeChange(lightSecondary)}>SECONDARY</ThemeButton>
                </Card>
              </ThemeContainer>
            </CardBody>
          </Card>
        </CardsContainer>
        <Footer>
          <div>
            <p>Footer Page</p>
          </div>
        </Footer>
      </div>
    </ThemeProvider>
  );
}
export default App;

