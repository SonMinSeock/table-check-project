import styled from "styled-components";
import ReservationCard from "../../components/card/ReservationCard";
import { Button } from "../../components/form/includes/form-style";
import { useLocation } from "react-router-dom";

const Main = styled.main`
  height: calc(100vh - 108px - 111px);
  overflow: scroll;
`;
const Footer = styled.footer`
  position: fixed;
  width: 100%;
  height: 111px;
  max-width: 430px;
  bottom: 0;
  background-color: var(--color-gray-900);
  padding: var(--space-8) var(--space-4);
`;
function Reservation() {
  const {
    state: { reservationState },
  } = useLocation();
  console.log(reservationState);
  return (
    <>
      <Main>
        <ReservationCard state="예약 요청중" />
        <ReservationCard state={reservationState} />
        <ReservationCard state="예약 확정" />
        <ReservationCard state="예약 불가" />
        <ReservationCard state="자동 취소" />
      </Main>
      <Footer>
        <Button>추가로 예약하기</Button>
      </Footer>
    </>
  );
}

export default Reservation;
