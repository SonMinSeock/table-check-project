import { Link } from "react-router-dom";
import Guide from "../guide/Guide";
import { Header, Nav } from "./HomeHeader.style";

function HomeHeader() {
  return (
    <>
      <Header>
        <section>
          <Link id="logo-title" to="/">
            오마타세
          </Link>
          <Nav>
            <Link to="/contact">문의하기</Link>
            <Link to="/account/confirm">예약확인</Link>
          </Nav>
        </section>
        <Guide />
      </Header>
    </>
  );
}

export default HomeHeader;
