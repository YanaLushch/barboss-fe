import { Page as _Page } from "framework7-react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    /* change global css variables here */
  }
`;

export const Page = styled(_Page)`
  .page-content {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    & > div {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      svg {
        margin-bottom: 104px;
      }
      a {
        margin-bottom: 20px;
        width: 239px;
        max-width: 100wh;
      }
    }
  }
`;
