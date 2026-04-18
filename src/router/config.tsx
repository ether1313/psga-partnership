import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Casinos from "../pages/casinos/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/casinos",
    element: <Casinos />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
