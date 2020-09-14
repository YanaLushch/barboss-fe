import React, { FC } from "react";

import { inject, observer } from "mobx-react";

import { ActionFailed } from "../../../errors";
import { CommonStore } from "../../CommonStore";
import ErrResourceNotFound from "../ErrResourceNotFound/ErrResourceNotFound";
import ErrUnauthorizedAccess from "../ErrUnauthorizedAccess/ErrUnauthorizedAccess";
import ErrUnexpectedError from "../ErrUnexpectedError/ErrUnexpectedError";

type InjectedProps = {
  commonStore: CommonStore;
};

export const UserErrors: FC<InjectedProps> = ({ commonStore }) => {
  // useEffect(() => {
  //   history.listen(() => {
  //     commonStore.clearErrors();
  //     commonStore.clearToasts();
  //   });
  // }, [commonStore]);

  if (commonStore.errors.length === 0) return null;

  const latestActionError = commonStore.errors.filter(
    (error) => error instanceof ActionFailed
  )[0] as ActionFailed;

  if (latestActionError) {
    // pushToast({
    //   id: latestActionError.id,
    //   title: latestActionError.title,
    //   description: latestActionError.description,
    //   intent: "negative",
    // });
    // const errorIndex = commonStore.errors.findIndex(
    //   (item) => item.id === latestActionError.id
    // );
    // commonStore.errors.splice(errorIndex, 1);
    // return null;
  }

  return (
    <div>
      <ErrResourceNotFound />
      <ErrUnauthorizedAccess />
      <ErrUnexpectedError />
    </div>
  );
};

UserErrors.displayName = "UserErrors";

export default (inject("commonStore")(observer(UserErrors)) as unknown) as FC;
