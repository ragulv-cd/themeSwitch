import { createGlobalStyle } from "styled-components";
import * as theme from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: hsl(0, 0%, 100%);
  color: hsl(0, 1%, 16%);
  font-family: monospace;
  overflow-x: hidden;
}
.light {
  background-color: hsl(0, 0%, 93%);
}
.dark {
  background-color: hsl(0, 0%, 20%);
}
.blue {
  background-color: hsl(195, 53%, 79%);
}
.green {
  background-color: hsl(150, 80%, 15%);
}
.brown {
  background-color: hsl(39, 70%, 50%);
}
.pink {
  background-color: hsl(350, 100%, 88%);
}

// active theme
.active{
    border: 3px solid hsl(0, 0%, 87%);
    }
`