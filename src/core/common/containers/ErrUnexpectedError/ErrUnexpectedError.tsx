import { inject, observer } from "mobx-react";
import React, { FC } from "react";
import { CommonStore } from "../../CommonStore";
import { UnexpectedError } from "../../../errors";

type InjectedProps = {
  commonStore: CommonStore;
};

export const ErrUnexpectedError: FC<InjectedProps> = ({ commonStore }) => {
  const latestError = commonStore.errors.filter(
    (error) => error instanceof UnexpectedError
  )[0];

  if (!latestError) return null;

  return (
    <>
      <div>An error has occurred. Please try again.</div>
      <div>If the problem persists then please contact support at </div>
    </>
  );
};

ErrUnexpectedError.displayName = "UnexpectedError";

export default (inject("commonStore")(
  observer(ErrUnexpectedError)
) as unknown) as FC;
