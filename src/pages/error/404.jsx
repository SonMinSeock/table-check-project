import HomeHeader from "../../components/header/HomeHeader";
import { Main, Title } from "../../styles/pages/error/404.style";

function Error404() {
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
