import styled from "styled-components";
import Form from "../../../components/form/Form";
import { useLocation } from "react-router-dom";
import { reservationNumber } from "../../../util/reservation-number";

const Main = styled.main`
  overflow: scroll;
`;

function ReservationPlus() {
  const {
    state: { reservations },
  } = useLocation();

  const getReservationNumber = () => {
    if (reservations.length === 0) {
      return reservationNumber[0];
    } else if (reservations.length === 1) {
      return reservationNumber[1];
    } else if (reservations.length === 2) {
      return reservationNumber[2];
    } else if (reservations.length === 3) {
      return reservationNumber[3];
    } else if (reservations.length === 4) {
      return reservationNumber[4];
    } else {
      return reservationNumber[5];
    }
  };

  return (
    <>
      <Main>
        <Form state="유료 예약" reservationNumber={getReservationNumber()} />
      </Main>
    </>
  );
}

export default ReservationPlus;
