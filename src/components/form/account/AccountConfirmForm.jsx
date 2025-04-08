import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { fireStore } from "../../../database/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useSetRecoilState } from "recoil";
import { userAtom, userIdAtom } from "../../../recoil/user/user";
import { reservationsAtom } from "../../../recoil/reservation/reservation";
import Loading from "../../loading/Loading";
import { Button } from "../../../styles/components/Button.style";
import { Form, InputContainer, Label, Input } from "../../../styles/components/form/account/AccountConfirmForm.style";

function AccountConfirmForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const setUser = useSetRecoilState(userAtom);
  const setUserId = useSetRecoilState(userIdAtom);
  const setReservations = useSetRecoilState(reservationsAtom);

  const onValid = (data) => {
    const q = query(collection(fireStore, "users"), where("phoneNumber", "==", data.phoneNumber));

    onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (docs.length !== 0) {
        setUser({ ...docs[0] });
        setUserId(docs[0].id);
      } else {
        setUserId(null);
        setReservations([]);
        alert("예약을 찾지 못했습니다.");
      }
      navigate("/user/reservation");
    });
  };

  return (
    <>
      {isSubmitting && <Loading />}
      <Form onSubmit={handleSubmit(onValid)}>
        <section>
          <InputContainer>
            <Label>전화번호</Label>
            <Input
              type="tel"
              {...register("phoneNumber", { required: true, minLength: 11, maxLength: 11 })}
              minLength="11"
              maxLength="11"
              placeholder="01012345678"
            />
          </InputContainer>
        </section>
        <section>
          <Button>확인</Button>
        </section>
      </Form>
    </>
  );
}

export default AccountConfirmForm;
