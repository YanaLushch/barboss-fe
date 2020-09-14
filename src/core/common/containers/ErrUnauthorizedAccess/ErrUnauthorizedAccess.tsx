import { inject, observer } from "mobx-react";
import React, { FC } from "react";
import { MessagePage } from "./ErrUnauthorizedAccess.styles";
import { CommonStore } from "../../CommonStore";
import { UnauthorizedAccess } from "../../../errors";

type InjectedProps = {
  commonStore: CommonStore;
};

export const ErrUnauthorizedAccess: FC<InjectedProps> = ({ commonStore }) => {
  const latestError = commonStore.errors.filter(
    (error) => error instanceof UnauthorizedAccess
  )[0];

  if (!latestError) return null;

  return (
    <MessagePage>Unauthorized access</MessagePage>
  );
};

ErrUnauthorizedAccess.displayName = "UnauthorizedAccess";

export default (inject("commonStore")(
  observer(ErrUnauthorizedAccess)
) as unknown) as FC;
