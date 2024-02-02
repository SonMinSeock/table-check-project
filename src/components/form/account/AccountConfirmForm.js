import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../includes/form-style";
import { useNavigate } from "react-router-dom";

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

const Paragraph = styled.p`
  font-size: var(--font-size-2);
`;

function AccountConfirmForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onValid = (data) => {
    console.log(data);
    navigate("/user/reservation");
  };

  return (
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
  );
}

export default AccountConfirmForm;
