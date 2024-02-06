import styled from "styled-components";
import AccountForm from "../../components/form/account/AccountForm";

const Title = styled.h1`
  font-weight: bold;
  font-size: var(--font-size-6);
  margin: var(--space-4);
`;

const Main = styled.main`
  height: 80%;
`;

function Account() {
  return (
    <>
      <Main>
        <Title>
          예약 성함 및 예약 확인 시<br />
          필요한 정보에요
        </Title>
        <AccountForm />
      </Main>
    </>
  );
}

export default Account;
