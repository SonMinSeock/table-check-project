import AccountConfirmForm from "../../components/form/account/AccountConfirmForm";
import { Main, Title } from "../../styles/pages/account/AccountConfirm.style";
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
