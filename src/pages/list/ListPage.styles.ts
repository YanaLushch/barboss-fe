import { Page as _Page } from "framework7-react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  .title{
    padding-top: 15px;
  }
  .subnavbar {
    padding-bottom: 10px;
  }
`;

export const Page = styled(_Page)`
  .page-content {
    /* change local component css here */
  }
`;
