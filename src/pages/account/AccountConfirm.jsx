import styled from "styled-components";
import AccountConfirmForm from "../../components/form/account/AccountConfirmForm";

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
        <Title>예약자 전화번호를 입력해주세요</Title>
        <AccountConfirmForm />
      </Main>
    </>
  );
}

export default Account;
