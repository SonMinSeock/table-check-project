import styled from "styled-components";
import Form from "../../../components/form/Form";
import { Button } from "../../../components/form/includes/form-style";

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
  padding: var(--space-2) var(--space-4);
`;

const Paragraph = styled.p`
  color: var(--color-gray-800);
  font-size: var(--font-size-3);
  text-align: center;
  margin-bottom: 0.3rem;
  line-height: 15px;
  font-weight: bold;
  color: #5e5e5e;
`;

function ReservationPlus() {
  return (
    <>
      <Main>
        <Form state="유료 예약" />
      </Main>
      <Footer>
        <Paragraph>
          3,000원의 수수료가 발생해요
          <br />
          예약 완료가 되면 수수료가 부가되니 안심하세요
        </Paragraph>
        <Button>예약 확인하기</Button>
      </Footer>
    </>
  );
}

export default ReservationPlus;
