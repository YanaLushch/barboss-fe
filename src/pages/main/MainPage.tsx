import React, { FC, useEffect } from "react";

import { inject, observer } from "mobx-react";

import {
  Page,
  Navbar,
  Toolbar,
  Link,
  NavLeft,
  NavTitle,
  NavRight,
  Popup,
  Block,
  Button,
  f7ready,
} from "framework7-react";

import { CommonStore } from "../../core/common/CommonStore";
import { useScrollToTop } from "../../hooks/useScrollToTop";

type InjectedProps = {
  commonStore: CommonStore;
};

export const MainPage: FC<RouteParams & InjectedProps> = ({ f7router }) => {
  useScrollToTop();

  useEffect(() => {
    f7ready((f7) => {
      console.log("f7 ", f7);
    });
  }, [f7router]);

  return (
    <Page>
      <Navbar>
        <NavLeft>
          <Link>Left Link</Link>
        </NavLeft>
        <NavTitle>My App</NavTitle>
        <NavRight>
          <Link>Right Link</Link>
        </NavRight>
      </Navbar>
      <Toolbar bottom={true}>
        <Link>Link 1</Link>
        <Button fill={true} popupOpen=".demo-popup-push">
          Popup Push
        </Button>
      </Toolbar>
      <p>Page content goes here</p>
      <Link href="/about/">About App</Link>
      <Popup className="demo-popup-push" push={true}>
        <Page>
          <Navbar title="Popup Push">
            <NavRight>
              <Link popupClose={true}>Close</Link>
            </NavRight>
          </Navbar>
          <Block strong={true}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </Block>
        </Page>
      </Popup>
    </Page>
  );
};

MainPage.displayName = "MainPage";

export default (inject("commonStore")(observer(MainPage)) as unknown) as FC;
