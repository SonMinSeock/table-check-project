import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Header } from "../includes/AccountHeader.style";

function DifrentTypeHeader() {
  return (
    <>
      <Header>
        <Link to="..">
          <IoIosArrowBack size={20} />
        </Link>
      </Header>
    </>
  );
}

export default DifrentTypeHeader;
