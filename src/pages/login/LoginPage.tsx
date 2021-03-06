import React, { FC } from "react";

import { inject, observer } from "mobx-react";

import { useScrollToTop } from "../../hooks/useScrollToTop";
import { GlobalStyles, Page } from "./LoginPage.styles";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { WideButton } from "../../components/WideButton";

export const LoginPage: FC<RouteParams> = ({ f7route }) => {
  useScrollToTop();

  return (
    <Page>
      <GlobalStyles />
      <div>
        <Logo />
        <WideButton fill={true} iconF7="logo_facebook">
          Login with Facebook
        </WideButton>
        <WideButton fill={true} iconF7="logo_google">
          Login with Google
        </WideButton>
      </div>
    </Page>
  );
};

LoginPage.displayName = "LoginPage";

export default (inject()(observer(LoginPage)) as unknown) as FC;
