import { Outlet } from "react-router-dom";
import ReservationHeader from "../../header/reservation/ReservationHeader";

function ReservationLayout() {
  return (
    <>
      <ReservationHeader />
      <Outlet />
    </>
  );
}

export default ReservationLayout;
