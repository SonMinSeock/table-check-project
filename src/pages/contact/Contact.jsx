import { Link } from "react-router-dom";
import { Main, Title, Paragraph } from "../../styles/pages/contact/Contact.style";

function Contact() {
  return (
    <>
      <Main>
        <Title>문의하기</Title>
        <Paragraph>
          예약 관련 문의를 하실 경우 성함과 전화번호를
          <br />
          말씀해주세요
        </Paragraph>
        <Link to="https://open.kakao.com/o/ssRfGVag" target="_blank">
          오픈채팅방
        </Link>
      </Main>
    </>
  );
}

export default Contact;
