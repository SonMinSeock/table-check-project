import { Outlet } from "react-router-dom";
import DifrentTypeHeader from "../../header/account/DifrentTypeHeader";

function AccountLayout() {
  return (
    <>
      <DifrentTypeHeader />
      <Outlet />
    </>
  );
}

export default AccountLayout;
