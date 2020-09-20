/// <reference types="react-scripts" />

declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "change-case-keys" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeCaseKeys: (...args: any[]) => any;
  export default changeCaseKeys;
}

interface RouteParams {
  f7router: {
    /** Link to global app instance */
    app: Framework7;
    /** Link to related View instance */
    view: View.View;
    /** Object with router initialization parameters */
    params: View.Parameters;
    /** Router's view HTML element */
    el: HTMLElement;
    /** Dom7 instance with router's view HTML element */
    $el: Dom7Instance;
    /** Array with available router's routes */
    routes: RouteParameters[];
    /** Array with router's view history */
    history: string[];

    /** Object with current route data */
    currentRoute: Route;
    /** Object with previously active route data */
    previousRoute: Route;
    /** Boolean property indicating is it allowed to change page / navigate or not */
    allowPageChange: boolean;
    /** Generate route url based on a given route name */
    generateUrl(parameters: {
      /** route name */
      name: string;
      /** route params */
      params: any;
      /** route query */
      query: any;
    }): string;
    /** Navigate to (load) new page */
    navigate(url: string, options?: RouteOptions): Router;
    /** Navigate to (load) new page by parameters. This method allows to navigate to route by its name */
    navigate(parameters: NavigateParameters, options?: RouteOptions): Router;
    /** Go back to previous page, going back in View history */
    back(url?: string, options?: RouteOptions): Router;
    /** Refresh/reload current page */
    refreshPage(): Router;
    /** Clear router previous pages history and remove all previous pages from DOM */
    clearPreviousHistory(): Router;
    /** Updates current route url, and updates `router.currentRoute` properties (query, params, hash, etc.) based on passed url. This method doesn't load or reload any content. It just changes current route url */
    updateCurrentUrl(url: string): Router;
  };
  f7route: {
    /** route URL */
    url: string;
    /** route path */
    path: string;
    /** object with route query. If the url is `/page/?id=5&foo=bar` then it will contain the following object `{id: '5', foo: 'bar'}` */
    query: { [queryParameter: string]: string | undefined };
    /** route params. If we have matching route with `/page/user/:userId/post/:postId/` path and url of the page is `/page/user/55/post/12/` then it will be the following object `{userId: '55', postId: '12'}` */
    params: { [routeParameter: string]: string | undefined };
    /** route name */
    name: string;
    /** route URL hash */
    hash: string;
    /** object with matching route from available routes */
    route: RouteParameters;
    /** context that was passed to the route */
    context: object;
  };
}
