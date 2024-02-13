import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Header } from "../includes/header.style";

function ReservationHeader() {
  return (
    <>
      <Header>
        <section>
          <Link to="..">
            <IoIosArrowBack size={24} />
          </Link>
          <Link to="/contact">문의하기</Link>
        </section>
      </Header>
    </>
  );
}

export default ReservationHeader;
