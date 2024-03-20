import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Header } from "../includes/AccountHeader.style";

function DifrentTypeHeader() {
  return (
    <>
      <Header>
        <Link to={-1}>
          <IoIosArrowBack size={24} />
        </Link>
      </Header>
    </>
  );
}

export default DifrentTypeHeader;
