import { ListPage } from "./pages/list";
import { LoginPage } from "./pages/login";
import { ProfilePage } from "./pages/profile";

// append pages imports here

export default [
  { path: "/", component: LoginPage },
  { path: "/list", component: ListPage },
  { path: "/profile/:itemId", component: ProfilePage },
  /* append pages routes here */
];
