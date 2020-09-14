import { FC, useEffect } from "react";

import { inject, observer } from "mobx-react";

import { CommonStore } from "../../CommonStore";

type InjectedProps = {
  commonStore: CommonStore;
};

export const LoadingPage: FC<InjectedProps> = ({ commonStore }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const prevIsLoadingPage = useRef<any>(null);
  // const { pushLoading, popLoading } = useContext(LoadingContext);

  useEffect(() => {
    // const { isLoadingPage } = commonStore;
    // if (isLoadingPage && !prevIsLoadingPage.current) {
    //   prevIsLoadingPage.current = pushLoading();
    // }
    // if (!isLoadingPage && prevIsLoadingPage.current) {
    //   popLoading(prevIsLoadingPage.current);
    //   prevIsLoadingPage.current = null;
    // }
  }, [commonStore, commonStore.isLoadingPage]);

  return null;
};

LoadingPage.displayName = "LoadingPage";

export default (inject("commonStore")(observer(LoadingPage)) as unknown) as FC;
