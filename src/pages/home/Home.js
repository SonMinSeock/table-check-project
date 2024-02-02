import styled from "styled-components";
import HomeHeader from "../../components/header/HomeHeader";
import HomeImage from "../../components/image/HomeImage";
import Form from "../../components/form/Form";

const Title = styled.h1`
  color: var(--color-white);
  font-size: var(--font-size-7);
  padding: var(--space-6) var(--space-8);
`;

const Paragraph = styled.p`
  text-align: center;
  max-width: 286px;
  margin: 0 auto;
  line-height: 23px;
  .highlight-blue {
    color: var(--color-primary);
    font-weight: bold;
  }
`;

const Footer = styled.footer`
  font-size: 12px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding: 20px 0;
  line-height: 23px;
  background-color: var(--color-gray-900);
  color: #717171;
  strong {
    font-weight: bold;
  }
`;

function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <HomeImage />
        <Title>
          일본 음식점 예약
          <br /> 이제 줄서지 마세요
        </Title>
        <Form />
        <Paragraph>
          <strong className="highlight-blue">[무료 예약 확인하기]</strong> 는 실제 예약이 아닙니다. 추후 예약확인을 통해
          예약을 확정할 수 있으니 안심하고 확인해 보세요
        </Paragraph>
      </main>
      <Footer>
        <p>
          현재 <strong>'오마타세'</strong> 서비스는 정식 서비스가 아닌 시험 서비스로 운영되고
          <br /> 있습니다. 현재는 일본 현지 담당자가 해당 음식점 예약을 진행하고 있지
          <br />만 예기치 못한 문제가 발생하더라도 양해 부탁드립니다.
        </p>
      </Footer>
    </>
  );
}

export default Home;
