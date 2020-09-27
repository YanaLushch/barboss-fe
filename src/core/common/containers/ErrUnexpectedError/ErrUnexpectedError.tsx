import React, { FC, useMemo } from "react";

import { Block, Link, Navbar, NavRight, Page, Popup } from "framework7-react";
import { inject, observer } from "mobx-react";

import { UnexpectedError } from "../../../errors";
import { CommonStore } from "../../CommonStore";

type InjectedProps = {
  commonStore: CommonStore;
};

export const ErrUnexpectedError: FC<InjectedProps> = ({ commonStore }) => {
  const latestError = useMemo(
    () =>
      commonStore.errors.filter((error) => error instanceof UnexpectedError)[0],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [commonStore.errors, commonStore.errors.length]
  );

  return (
    <>
      <Popup opened={!!latestError}>
        <Page>
          <Navbar title="Unexpected error">
            <NavRight>
              <Link onClick={commonStore.clearErrors}>Close</Link>
            </NavRight>
          </Navbar>
          <Block>
            <p>
              Here comes popup. You can put here anything, even independent view
              with its own navigation. Also not, that by default popup looks a
              bit different on iPhone/iPod and iPad, on iPhone it is fullscreen.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <p>
              Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula...
            </p>
          </Block>
        </Page>
      </Popup>
    </>
  );
};

ErrUnexpectedError.displayName = "ErrUnexpectedError";

export default (inject("commonStore")(
  observer(ErrUnexpectedError)
) as unknown) as FC;
