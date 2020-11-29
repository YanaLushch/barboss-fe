import React, { FC } from "react";

import { App, View } from "framework7-react";

import routes from "../routes";

// import LoadingPage from "../core/common/containers/LoadingPage/LoadingPage";
// append pages imports here

const Root: FC = () => {
  return (
    <App params={{ routes }} themeDark={true}>
      <View main={true} />
    </App>
  );
};

Root.displayName = "Root";

export default Root;
