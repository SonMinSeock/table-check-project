import AccountForm from "../../components/form/account/AccountForm";
import { Main, Title } from "../../styles/pages/account/Account.style";

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
