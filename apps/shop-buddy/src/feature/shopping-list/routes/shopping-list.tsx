import { Outlet, RouteObject } from "react-router-dom";
import { ShoppingListLayout } from "../components/layout";

export const shoppingListRoutes: RouteObject[] = [
  {
    // path: "/shopping-list",
    element: <Outlet />,
    children: [
      {
        path: "",
        element: <ShoppingListLayout />,
      },
    ],
  },
];
