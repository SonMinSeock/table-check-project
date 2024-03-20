import { Outlet } from "react-router-dom";
import DifrentTypeHeader from "../../header/account/DifrentTypeHeader";

function ContactLayout() {
  return (
    <>
      <DifrentTypeHeader />
      <Outlet />
    </>
  );
}

export default ContactLayout;
