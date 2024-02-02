import styled from "styled-components";
import ReservationCard from "../../components/card/ReservationCard";
import { Button } from "../../components/form/includes/form-style";

const Paragraph = styled.p`
  color: var(--color-gray-800);
  margin: 0 var(--space-4);
  font-size: var(--font-size-3);
  margin-bottom: var(--space-4);
`;
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
  return (
    <>
      <Main>
        <ReservationCard />
        <ReservationCard />
        <ReservationCard />
        <Paragraph>곧 예약 관련한 문자 알림을 보내겠습니다.</Paragraph>
      </Main>
      <Footer>
        <Button>추가로 예약하기</Button>
      </Footer>
    </>
  );
}

export default Reservation;
