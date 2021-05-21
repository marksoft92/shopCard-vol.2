import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import MainHeader from '../components/mainheader.js';

import { theme } from '../utils/theme.js'
const GlobalStyle = createGlobalStyle`
  body {
    pading: 0;
    background: ${({ theme }) => theme.colors.light};
    }
  *, *::before, *after {
    box-sizing: border-box;
  }
`;

const Wraper = styled.div`
height: 100%;
width: 100%;
background: white;`
  ;


const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Wraper>{children}</Wraper>

    </>
  </ThemeProvider>
);
export default Layout