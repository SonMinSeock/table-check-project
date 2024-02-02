import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Error404 from "../pages/error/404";
import RootLayout from "../components/layout/RootLayout";
import AccountLayout from "../components/layout/account/AccountLayput";
import Account from "../pages/account/Account";
import Reservation from "../pages/reservation/Reservation";
import ReservationLayout from "../components/layout/reservation/ReservationLayout";
import AccountConfrim from "../pages/account/AccountConfirm";
import ContactLayout from "../components/layout/contact/ContactLayout";
import Contact from "../pages/contact/Contact";

function Router() {
  const routes = [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error404 />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          element: <ContactLayout />,
          children: [
            {
              index: true,
              element: <Contact />,
            },
          ],
        },
        {
          path: "account",
          element: <AccountLayout />,
          children: [
            {
              index: true,
              element: <Account />,
            },
            {
              path: "confirm",
              element: <AccountConfrim />,
            },
          ],
        },
        {
          path: "user/reservation",
          element: <ReservationLayout />,
          children: [
            {
              index: true,
              element: <Reservation />,
            },
          ],
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default Router;
