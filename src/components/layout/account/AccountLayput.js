import { Outlet } from "react-router-dom";
import AccountHeader from "../../header/account/AccountHeader";

function AccountLayout() {
  return (
    <>
      <AccountHeader />
      <Outlet />
    </>
  );
}

export default AccountLayout;
