import styled from "styled-components";
import ReservationCard from "../../components/card/ReservationCard";
import { Button } from "../../components/form/includes/form-style";
import { useNavigate } from "react-router-dom";
import Guide from "../../components/guide/Guide";

const Main = styled.main`
  height: calc(100vh - 70px - 111px);
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
  const navigate = useNavigate();

  return (
    <>
      <Main>
        <Guide />
        <ReservationCard state="예약 요청중" />
        <ReservationCard state="확정 대기중" />
        <ReservationCard state="예약 확정" />
        <ReservationCard state="예약 불가" />
        <ReservationCard state="자동 취소" />
      </Main>
      <Footer>
        <Button onClick={() => navigate("/user/reservation/plus")}>추가로 예약하기</Button>
      </Footer>
    </>
  );
}

export default Reservation;
