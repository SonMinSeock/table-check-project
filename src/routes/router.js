import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Error404 from "../pages/error/404";

function Router() {
  const routes = [
    {
      path: "/",
      errorElement: <Error404 />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default Router;
