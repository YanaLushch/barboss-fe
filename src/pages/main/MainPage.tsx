import React, { FC } from "react";

import { Link, Navbar, NavTitle, Page, Toolbar } from "framework7-react";
import { inject, observer } from "mobx-react";

import { CommonStore } from "../../core/common/CommonStore";
import { ActionFailed } from "../../core/errors";
import { useScrollToTop } from "../../hooks/useScrollToTop";

type InjectedProps = {
  commonStore: CommonStore;
};

export const MainPage: FC<RouteParams & InjectedProps> = ({ f7route }) => {
  useScrollToTop();

  return (
    <Page>
      <Navbar>
        <NavTitle>Framework7 template</NavTitle>
      </Navbar>
      <Toolbar bottom={true}>
        <Link>Link 1</Link>
        <Link
          onClick={(): void => {
            throw new ActionFailed("Test", "Test");
          }}
        >
          Make error
        </Link>
      </Toolbar>
    </Page>
  );
};

MainPage.displayName = "MainPage";

export default (inject("commonStore")(observer(MainPage)) as unknown) as FC;
