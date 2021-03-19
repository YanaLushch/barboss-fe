import React, { FC, ReactElement } from "react";

import {
  Link,
  Navbar,
  NavRight,
  Searchbar,
  Subnavbar,
  Toolbar,
} from "framework7-react";
import { inject, observer } from "mobx-react";

import { barbers } from "../../__mocks__/barbers";
import { Barber } from "../../api/Barber";
import { BarberCard } from "../../components/BarberCard";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { GlobalStyles, Page } from "./ListPage.styles";

export const ListPage: FC<RouteParams> = ({ f7router }) => {
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
          <div
            key={item.id}
            onClick={(): void => f7router.navigate(`/profile/${item.id}/`)}
          >
            <BarberCard key={item.id} barber={item} />
          </div>
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
