import styled from "styled-components";
import HomeHeader from "../../components/header/HomeHeader";

function Error404() {
  const Main = styled.main`
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Title = styled.h1`
    font-size: 28px;
  `;
  return (
    <>
      <HomeHeader />
      <Main>
        <Title>404 Page.</Title>
      </Main>
    </>
  );
}

export default Error404;
