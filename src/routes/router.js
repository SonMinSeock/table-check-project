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
import ReservationConfirm from "../pages/reservation/confirm/ReservationConfirm";
import ReservationConfirmLayout from "../components/layout/reservation/ReservationConfirmLayout";
import ReservationConfirmFinal from "../components/layout/reservation/ReservationConfirmFinal";
import ReservationPlus from "../pages/reservation/plus/ReservationPlus";
import ReservationPlusLayout from "../components/layout/reservation/ReservationPlusLayout";
import Admin from "../pages/admin/Admin";
import AdminLayout from "../components/layout/admin/AdminLayout";
import AdminLogin from "../pages/admin/login/AdminLogin";
import ReservationConfirmJPNLayout from "../components/layout/reservation/ReservationConfirmJPNLayout";
import ReservationConfirmJPN from "../pages/reservation/confirm/jpn/ReservationConfirmJPN";

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
        {
          path: "user/reservation/plus",
          element: <ReservationPlusLayout />,
          children: [
            {
              index: true,
              element: <ReservationPlus />,
            },
          ],
        },
        {
          path: "user/reservation/confirm/check",
          element: <ReservationConfirmLayout />,
          children: [
            {
              index: true,
              element: <ReservationConfirm state="예약 확정" />,
            },
            {
              path: "final",
              element: <ReservationConfirmFinal />,
            },
          ],
        },
        // 일본어 예약자 확인
        {
          path: "/reservation/confirm/jpn",
          element: <ReservationConfirmJPNLayout />,
          children: [
            {
              index: true,
              element: <ReservationConfirmJPN />,
            },
          ],
        },
        {
          path: "admin",
          element: <AdminLayout />,
          children: [
            {
              index: true,
              element: <Admin />,
            },
            {
              path: "login",
              element: <AdminLogin />,
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
