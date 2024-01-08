import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { shoppingListRoutes } from "./feature/shopping-list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      ...shoppingListRoutes,
      // {
      //   path: "/",
      //   element: <div>Home</div>,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
