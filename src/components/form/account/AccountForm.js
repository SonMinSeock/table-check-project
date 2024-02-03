import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../includes/form-style";
import { Link, useNavigate } from "react-router-dom";

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

const LinkContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & a {
    margin-bottom: var(--space-4);
    color: #5e5e5e;
    font-size: var(--font-size-3);
  }
`;

function AccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onValid = (data) => {
    console.log(data);
    navigate("/user/reservation", { state: { reservationState: "확정 대기중" } });
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <section>
        <InputContainer>
          <Label>예약자 성함</Label>
          <Input
            type="text"
            {...register("username", { required: true, minLength: 2 })}
            required
            placeholder="홍길동"
          />
        </InputContainer>
        <InputContainer>
          <Label>전화번호</Label>
          <Input
            type="tel"
            {...register("phoneNumber", { required: true, minLength: 11, maxLength: 11 })}
            minLength="11"
            maxLength="11"
            placeholder="01012345678"
          />
          <Paragraph>추후 예약 확인 및 서비스 안내에 사용되는 정보에요</Paragraph>
        </InputContainer>
      </section>
      <section>
        <LinkContainer>
          <Link to="https://www.notion.so/f8d7c49e99254b0d83f79c1167634020?pvs=4" target="_blank">
            개인정보 수집 동의
          </Link>
          <Link to="https://www.notion.so/f8d7c49e99254b0d83f79c1167634020?pvs=4" target="_blank">
            SMS 서비스 필수 안내 수신 동의
          </Link>
        </LinkContainer>
        <Button>모두 동의</Button>
      </section>
    </Form>
  );
}

export default AccountForm;
