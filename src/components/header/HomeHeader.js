import Guide from "../guide/Guide";
import { Header, Nav } from "./HomeHeader.style";

function HomeHeader() {
  return (
    <>
      <Header>
        <section>
          <a id="logo-title" href="/">
            오마타세
          </a>
          <Nav>
            <a href="#">문의하기</a>
            <a href="#">예약확인</a>
          </Nav>
        </section>
        <Guide />
      </Header>
    </>
  );
}

export default HomeHeader;
