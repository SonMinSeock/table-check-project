import React, { useEffect } from "react";
import styled from "styled-components";
import EmailImage from "../../../assets/images/icon_Email.webp";
import ChatImage from "../../../assets/images/icon_Chat.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../styles/components/Button.style";

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
  text-align: center;
  line-height: 30px;
`;

const Paragraph = styled.p`
  color: #757880;
  margin: 0 var(--space-4);
  font-size: var(--font-size-3);
  margin-top: var(--space-6);
  text-align: center;
  font-weight: bold;
  line-height: 20px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  padding: var(--space-4);

  img {
    width: 190px;
    height: auto;
    margin-bottom: var(--space-8);
  }
`;

const Footer = styled.footer`
  height: 20%;
  padding: 0 var(--space-4);
  display: flex;
  align-items: center;
`;

function ReservationConfirmFinal() {
  const {
    state: { message },
  } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    // 이미지를 사전로드합니다.
    const img1 = new Image();
    img1.src = EmailImage;

    const img2 = new Image();
    img2.src = ChatImage;
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행되도록 빈 배열을 전달합니다.

  if (message === "예약 확정") {
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
          <Button onClick={() => navigate("/user/reservation")}>확인</Button>
        </Footer>
      </>
    );
  } else if (message === "예약 확인") {
    return (
      <>
        <Main>
          <img src={ChatImage} alt="차트 아이콘 이미지" />
          <Title>
            예약 확인 요청이
            <br />
            완료되었어요
          </Title>
          <Paragraph>
            해당 음식점에 해당 날짜와 시간에 <br />
            예약이 가능한지 확인 후 알려드릴게요
          </Paragraph>
        </Main>
        <Footer>
          <Button onClick={() => navigate("/user/reservation")}>확인</Button>
        </Footer>
      </>
    );
  }
}

export default ReservationConfirmFinal;
