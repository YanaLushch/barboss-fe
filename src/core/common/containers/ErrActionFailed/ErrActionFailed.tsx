import React, { FC, useMemo } from "react";

import { Block, Link, Navbar, NavRight, Page, Popup } from "framework7-react";
import { inject, observer } from "mobx-react";

import { ActionFailed } from "../../../errors";
import { CommonStore } from "../../CommonStore";

type InjectedProps = {
  commonStore: CommonStore;
};

export const ErrActionFailed: FC<InjectedProps> = ({ commonStore }) => {
  const latestError = useMemo(
    () =>
      commonStore.errors.filter(
        (error) => error instanceof ActionFailed
      )[0] as ActionFailed,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [commonStore.errors, commonStore.errors.length]
  );

  return (
    <>
      <Popup opened={!!latestError}>
        <Page>
          <Navbar title={latestError?.title}>
            <NavRight>
              <Link onClick={commonStore.clearErrors}>Close</Link>
            </NavRight>
          </Navbar>
          <Block>{latestError?.description}</Block>
        </Page>
      </Popup>
    </>
  );
};

ErrActionFailed.displayName = "ErrActionFailed";

export default (inject("commonStore")(
  observer(ErrActionFailed)
) as unknown) as FC;
