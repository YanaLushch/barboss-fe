// USE ONLY FOR UNIT TEST!

/* eslint-disable import/no-extraneous-dependencies */
import { createLocation, createMemoryHistory } from "history";
import { match as routerMatch, RouteComponentProps } from "react-router";

type MatchParameter<Params> = { [K in keyof Params]?: string };

const generateUrl = <Params extends MatchParameter<Params>>(
  path: string,
  params: Params
): string => {
  let tempPath = path;

  for (const param in params) {
    if (params.hasOwnProperty(param)) {
      const value = params[param];
      tempPath = tempPath.replace(
        `:${param}`,
        value as NonNullable<typeof value>
      );
    }
  }

  return tempPath;
};

export const routerTestProps = <Params extends MatchParameter<Params> = {}>(
  path: string,
  params: Params,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extendMatch: Partial<routerMatch<any>> = {}
): RouteComponentProps<Params> => {
  const match: routerMatch<Params> = Object.assign(
    {},
    {
      isExact: false,
      path,
      url: generateUrl(path, params),
      params,
    },
    extendMatch
  );
  const history = createMemoryHistory();
  const location = createLocation(match.url);

  return { history, location, match };
};
