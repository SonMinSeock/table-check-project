import { Link, Outlet } from "react-router-dom";
import { Header } from "../../header/HomeHeader.style";
import { IoIosArrowBack } from "react-icons/io";

function ReservationPlusLayout() {
  return (
    <>
      <Header>
        <section>
          <Link to="..">
            <IoIosArrowBack size={20} />
          </Link>
          <Link to="/contact">문의하기</Link>
        </section>
      </Header>
      <Outlet />
    </>
  );
}

export default ReservationPlusLayout;
