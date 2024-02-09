import { useLocation, useNavigate } from "react-router-dom";
import DifrentTypeHeader from "../../../../components/header/account/DifrentTypeHeader";
import styled from "styled-components";
import { Button } from "../../../../components/form/includes/form-style";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 80%;
  padding: var(--space-4);
  img {
    width: 254px;
    height: auto;
  }
  & .label {
    margin-bottom: var(--space-2);
  }
  & > span {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

const Footer = styled.footer`
  padding: 0 var(--space-4);
  display: flex;
  align-items: center;
`;

function ReservationConfirmJPN() {
  const {
    state: { reservationUsernameJPN },
  } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <DifrentTypeHeader />
      <Main>
        <span className="label">예약자 이름</span>
        <span>{reservationUsernameJPN}</span>
      </Main>
      <Footer>
        <Button onClick={() => navigate("/")}>확인</Button>
      </Footer>
    </>
  );
}

export default ReservationConfirmJPN;
