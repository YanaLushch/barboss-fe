import { inject, observer } from "mobx-react";
import React, { FC } from "react";
import { CommonStore } from "../../CommonStore";
import { ResourceNotFound } from "../../../errors";

type InjectedProps = {
  commonStore: CommonStore;
};

export const ErrResourceNotFound: FC<InjectedProps> = ({ commonStore }) => {
  const latestError = commonStore.errors.filter(
    (error) => error instanceof ResourceNotFound
  )[0];

  if (!latestError) return null;

  return <>Error 404</>;
};

ErrResourceNotFound.displayName = "ResourceNotFound";

export default (inject("commonStore")(
  observer(ErrResourceNotFound)
) as unknown) as FC;
