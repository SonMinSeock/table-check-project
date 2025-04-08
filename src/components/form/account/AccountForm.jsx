import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { reservationAtom } from "../../../recoil/reservation/reservation";
import { userAtom, userIdAtom } from "../../../recoil/user/user";
import { accountUser } from "../../../model/user";
import Loading from "../../loading/Loading";
import { Button } from "../../../styles/components/Button.style";
import {
  Form,
  Input,
  InputContainer,
  Label,
  LinkContainer,
  Paragraph,
} from "../../../styles/components/form/account/AccountForm.style";

function AccountForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const getReservation = useRecoilValue(reservationAtom);
  const setUserId = useSetRecoilState(userIdAtom);
  const setUser = useSetRecoilState(userAtom);
  const navigate = useNavigate();

  const onValid = async (data) => {
    const userId = await accountUser({ ...data, reservation: getReservation });

    setUser({
      ...data,
    });
    setUserId(userId);

    // 라우터 경로를 설정: 예약확인 메시지 화면
    navigate("/user/reservation/confirm/check/final", { state: { message: "예약 확인" } });
  };

  return (
    <>
      {isSubmitting && <Loading />}
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
            <Paragraph>서비스 진행 현황을 문자 메세지로 전송해 드려요</Paragraph>
          </InputContainer>
        </section>
        <section>
          <LinkContainer>
            <Link to="https://imaginefly.notion.site/imaginefly/3878dc4a4b4040739d9059c18331053a" target="_blank">
              개인정보 수집 동의
            </Link>
            <Link to="https://imaginefly.notion.site/imaginefly/SMS-b579e75505214dc39e6d1d091f956e33" target="_blank">
              SMS 서비스 필수 안내 수신 동의
            </Link>
          </LinkContainer>
          <Button>모두 동의</Button>
        </section>
      </Form>
    </>
  );
}

export default AccountForm;
