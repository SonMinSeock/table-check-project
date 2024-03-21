import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../includes/form-style";
import { useNavigate } from "react-router-dom";
import { fireStore } from "../../../database/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useSetRecoilState } from "recoil";
import { userAtom, userIdAtom } from "../../../recoil/user/user";
import { reservationsAtom } from "../../../recoil/reservation/reservation";
import Loading from "../../loading/Loading";

const Form = styled.form`
  height: 100%;
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-gray-300);
`;

const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  &:first-of-type input {
    margin-bottom: var(--space-6);
  }
  &:nth-of-type(2) input {
    margin-bottom: var(--space-2);
  }
`;
const Label = styled.label`
  font-size: var(--font-size-3);
  margin-bottom: var(--space-2);
`;
const Input = styled.input`
  font-size: var(--font-size-5);
  border-bottom: 1px solid var(--color-gray-700);
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 0.3rem 0;
  &::placeholder {
    color: var(--color-gray-800);
  }
`;

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
