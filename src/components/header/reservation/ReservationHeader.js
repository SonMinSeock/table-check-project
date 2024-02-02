import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Header } from "../includes/header.style";
import Guide from "../../guide/Guide";

function ReservationHeader() {
  return (
    <>
      <Header>
        <section>
          <Link to="..">
            <IoIosArrowBack size={20} />
          </Link>
          <Link to="">문의하기</Link>
        </section>
        <Guide />
      </Header>
    </>
  );
}

export default ReservationHeader;
