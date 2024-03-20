import { Link, Outlet } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Header } from "../../header/includes/header.style";

function ReservationPlusLayout() {
  return (
    <>
      <Header>
        <section>
          <Link to={-1}>
            <IoIosArrowBack size={24} />
          </Link>
          <Link to="/contact">문의하기</Link>
        </section>
      </Header>
      <Outlet />
    </>
  );
}

export default ReservationPlusLayout;
