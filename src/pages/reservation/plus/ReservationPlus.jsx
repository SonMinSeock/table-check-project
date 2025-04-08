// 예약 내역 페이지에서 추가 예약 클릭시 추가 예약 작성하는 페이지
import styled from "styled-components";
import Form from "../../../components/form/Form";
import { useLocation } from "react-router-dom";
import { getReservationNumber } from "../../../util/reservation-number";

const Main = styled.main`
  overflow: scroll;
`;

function ReservationPlus() {
  const {
    state: { reservations },
  } = useLocation();

  return (
    <>
      <Main>
        <Form state="유료 예약" reservationNumber={getReservationNumber(reservations)} />
      </Main>
    </>
  );
}

export default ReservationPlus;
