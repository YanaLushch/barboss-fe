import React, { FC, ReactElement } from "react";

import { inject, observer } from "mobx-react";

import { useScrollToTop } from "../../hooks/useScrollToTop";
import { GlobalStyles, Page } from "./ListPage.styles";
import { BarberCard } from "../../components/BarberCard";
import {
  NavRight,
  Link,
  Subnavbar,
  Navbar,
  Searchbar,
  Toolbar,
} from "framework7-react";
import { barbers } from "../../__mocks__/barbers";
import { Barber } from "../../api/Barber";

export const ListPage: FC<RouteParams> = ({ f7route }) => {
  useScrollToTop();

  return (
    <Page>
      <GlobalStyles />
      <Navbar title="barboss">
        <NavRight>
          <Link iconF7="sort_down"></Link>
        </NavRight>
        <Subnavbar inner={false}>
          <Searchbar
            searchContainer=".search-list"
            searchIn=".item-title"
          ></Searchbar>
        </Subnavbar>
      </Navbar>
      {barbers.map(
        (item: Barber): ReactElement => (
          <BarberCard key={item.id} barber={item} />
        )
      )}
      <Toolbar bottom={true}>
        <Link iconF7="star_fill">Label</Link>
        <Link iconF7="star_fill">Label</Link>
        <Link iconF7="star_fill">Label</Link>
      </Toolbar>
    </Page>
  );
};

ListPage.displayName = "ListPage";

export default (inject()(observer(ListPage)) as unknown) as FC;
