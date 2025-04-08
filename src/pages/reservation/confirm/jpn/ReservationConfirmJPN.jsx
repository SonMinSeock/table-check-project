import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../../styles/components/Button.style";
import { Main, Section, Footer } from "../../../../styles/pages/reservation/confirm/jpn/ReservationConfirmJPN.style";

function ReservationConfirmJPN() {
  const {
    state: { reservationUsernameJPN, checkDateTime, username },
  } = useLocation();
  const navigate = useNavigate();

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
