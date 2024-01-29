import styled from "styled-components";
import HomeHeader from "../../components/header/HomeHeader";
import HomeImage from "../../components/image/HomeImage";
import Form from "../../components/form/Form";

const Title = styled.h1`
  color: var(--color-white);
  font-size: var(--font-size-7);
  padding: var(--space-6) var(--space-8);
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
      </main>
    </>
  );
}

export default Home;
