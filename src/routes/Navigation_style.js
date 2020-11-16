import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "../StyleGuide/Colors";
import { Fonts } from "../StyleGuide/Typography";

export const GlobalStyle = createGlobalStyle`

  body {
    font-family: ${Fonts.MainFamily};
    /* color: ${Colors.White}; */
    padding: 0;
    margin: 0;
    letter-spacing: 1px;
  }
`;

export const Container = styled.div`
  width: 100%;
`;
