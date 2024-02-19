import styled from "styled-components";
import { Button } from "../../components/form/includes/form-style";
import { Link } from "react-router-dom";

const Main = styled.main`
  padding: var(--space-4);
  & a {
    display: block;
    width: 100%;
    color: #3b1e1e;
    background-color: #f9e000;
    font-weight: bold;
    border: none;
    padding: var(--space-3);
    border-radius: var(--border-radius-2);
    font-size: 1.1rem;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: var(--font-size-6);
  margin: var(--space-3) 0;
`;

const Paragraph = styled.p`
  font-size: var(--font-size-3);
  margin: var(--space-8) 0;
`;

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
