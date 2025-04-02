import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../../components/form/includes/form-style";

const Main = styled.main`
  height: 90%;
  padding: 5rem var(--space-4);
  img {
    width: 254px;
    height: auto;
  }
  & .label {
    margin-bottom: var(--space-2);
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  & > span {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
  }
`;

const Footer = styled.footer`
  padding: 0 var(--space-4);
  display: flex;
  align-items: center;
`;

function ReservationConfirmJPN() {
  const {
    state: { reservationUsernameJPN, checkDateTime, username },
  } = useLocation();
  const navigate = useNavigate();

  console.log(checkDateTime.split(" ")[0].split("월")[0]);
  return (
    <>
      <Main>
        <Section>
          <span>
            {checkDateTime.split(" ")[0]} {checkDateTime.split(" ")[1]}에 예약한
          </span>
          <span>
            {checkDateTime.split(" ")[0].split("월")[0]}月 {checkDateTime.split(" ")[1].split("일")[0]}日 に予約した
          </span>
        </Section>
        <Section>
          <span>{username} 입니다.</span>
          <span>{!reservationUsernameJPN ? "000" : reservationUsernameJPN}です</span>
        </Section>
      </Main>
      <Footer>
        <Button onClick={() => navigate("/")}>확인</Button>
      </Footer>
    </>
  );
}

export default ReservationConfirmJPN;
