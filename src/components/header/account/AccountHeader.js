import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = styled.header`
  padding: var(--space-4);
`;

function AccountHeader() {
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

export default AccountHeader;
