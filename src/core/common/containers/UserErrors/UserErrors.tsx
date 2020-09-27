import React, { FC, useEffect } from "react";

import { f7ready } from "framework7-react";
import { inject, observer } from "mobx-react";

import { CommonStore } from "../../CommonStore";
import ErrResourceNotFound from "../ErrResourceNotFound/ErrResourceNotFound";

type InjectedProps = {
  commonStore: CommonStore;
};

export const UserErrors: FC<InjectedProps> = ({ commonStore }) => {
  useEffect(() => {
    f7ready((f7) => {
      f7.views.main.router.on("routeChange", () => {
        commonStore.clearErrors();
        commonStore.clearToasts();
      });
    });
  }, [commonStore]);

  return (
    <div>
      <ErrResourceNotFound />
    </div>
  );
};

UserErrors.displayName = "UserErrors";

export default (inject("commonStore")(observer(UserErrors)) as unknown) as FC;
