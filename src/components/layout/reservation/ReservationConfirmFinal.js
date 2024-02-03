import styled from "styled-components";
import { Button } from "../../form/includes/form-style";
import EmailImage from "../../../assets/images/icon_Email.png";

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;
const Paragraph = styled.p`
  color: #757880;
  margin: 0 var(--space-4);
  font-size: var(--font-size-3);
  margin-top: var(--space-4);
  text-align: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  padding: var(--space-4);
  img {
    width: 254px;
    height: auto;
  }
`;

const Footer = styled.footer`
  height: 20%;
  padding: 0 var(--space-4);
  display: flex;
  align-items: center;
`;

function ReservationConfirmFinal() {
  return (
    <>
      <Main>
        <img src={EmailImage} alt="이메일 아이콘 이미지" />
        <Title>예약이 완료되었어요</Title>
        <Paragraph>
          해당 음식점에 예약 확인 후 예약 안내를
          <br />
          한번 더 보내드릴게요
        </Paragraph>
      </Main>
      <Footer>
        <Button>확인</Button>
      </Footer>
    </>
  );
}

export default ReservationConfirmFinal;
