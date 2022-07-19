import { createGlobalStyle } from "styled-components";
import * as theme from "./Theme.styled";
export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: monospace;
  overflow-x: hidden;
}

// theme buttons color

.contrastPrimary{
  background-color: ${({ theme }) => theme.colors.header};
}
.contrastSecondary{
  background-color: ${({ theme }) => theme.colors.header};
}
.darkPrimary{
  background-color: ${({ theme }) => theme.colors.header};
}
.darkSecondary{
  background-color: ${({ theme }) => theme.colors.header};
}
.lightPrimary{
  background-color: ${({ theme }) => theme.colors.header};
}
.lightSecondary{
  background-color: ${({ theme }) => theme.colors.header};
}
// active theme
.active{
    border: 3px solid ${({ theme }) => theme.colors.border};
}



`