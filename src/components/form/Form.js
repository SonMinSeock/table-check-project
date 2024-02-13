import styled from "styled-components";
import Calender from "../calender/Calender";
import TimeSelector from "../time-selector/TimeSelector";
import { useForm } from "react-hook-form";
import { Button } from "./includes/form-style";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { reservationAtom } from "../../recoil/reservation/reservation";
import { dateAtom } from "../../recoil/date/date";
import { userAtom, userIdAtom } from "../../recoil/user/user";
import { accountUser } from "../../model/user";

const Card = styled.form`
  background-color: var(--color-white);
  margin: var(--space-4) var(--space-6);
  padding: var(--space-8) var(--space-4);
  border-radius: var(--border-radius-2);
  border: 1px solid #000000;
  hr {
    background: var(--color-gray-700);
    height: 1px;
    border: 0;
    margin: var(--space-4) 0;
  }
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const Title = styled.h2`
  font-size: var(--font-size-6);
  margin-bottom: var(--space-4);
  font-weight: bold;
`;

const InputMapSection = styled.section`
  border: 1px solid #717171;
  padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-4);
  border-radius: var(--border-radius-3);
  input {
    margin-top: var(--space-2);
  }
`;

const Label = styled.label`
  font-size: var(--font-size-3);
  font-weight: 600;
  span {
    font-size: var(--font-size-2);
    font-weight: normal;
  }
  .highlight-red {
    color: var(--color-alert-red);
  }
  margin-bottom: var(--space-2);
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 14px;
`;

const DropMenuSection = styled.section`
  display: flex;
  border: 1px solid #717171;
  border-radius: var(--border-radius-3);
  padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-4);
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 10px;
  }
  & > div:first-of-type {
    border-right: 1px solid #000000;
  }
  .datapicker-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  font-size: var(--font-size-3);
  .date-record {
    display: none;
  }
`;

const Select = styled.select`
  border: none;
  background-color: var(--color-white);
  color: #000000;
  font: inherit;
`;
const Paragraph = styled.p`
  font-size: 0.82rem;
  line-height: 21px;
  text-align: center;
  margin-bottom: 0.3rem;
  font-weight: bold;
  color: #5e5e5e;
`;

function Form({ state = "무료 예약", reservationNumber }) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [getReservation, setReservation] = useRecoilState(reservationAtom);
  const [getDateTime, setDateTime] = useRecoilState(dateAtom);

  const getUser = useRecoilValue(userAtom);
  const getUserId = useRecoilValue(userIdAtom);

  const navigate = useNavigate();

  const onValid = async (data) => {
    console.log(data);
    if (data.firstTime === "선택") {
      return alert("1차 예약 시간 선택하지 않았습니다!");
    }

    if (getDateTime.secondDate && data.secondTime === "선택") {
      return alert("2차 예약 시간 선택하지 않았습니다!");
    }
    if (getDateTime.thirdDate && data.thirdTime === "선택") {
      return alert("3차 예약 시간 선택하지 않았습니다!");
    }

    setReservation({
      adultNumber: data.adultNumber,
      childNumber: data.childNumber,
      mapUrl: data.mapUrl,
      ...getDateTime,
      firstTime: data.firstTime,
      secondTime: data.secondTime,
      thirdTime: data.thirdTime,
      isFirstDateTimeConfirm: false, // 날짜 시간, 확정
      isSecondDateTimeConfirm: false,
      isThirdDateTimeConfirm: false,
    });

    setDateTime({
      firstDate: null,
      secondDate: null,
      thirdDate: null,
      // firstTime: null,
      // secondTime: null,
      // thirdTime: null,
    });

    if (getUserId) {
      await accountUser({
        ...getUser,
        reservation: {
          adultNumber: data.adultNumber,
          childNumber: data.childNumber,
          mapUrl: data.mapUrl,
          ...getDateTime,
          firstTime: data.firstTime,
          secondTime: data.secondTime,
          thirdTime: data.thirdTime,
          isFirstDateTimeConfirm: false, // 날짜 시간, 확정
          isSecondDateTimeConfirm: false,
          isThirdDateTimeConfirm: false,
        },
      });
      reset();
      navigate("/user/reservation/confirm/check/final", { state: { message: "예약 확인" } });
    } else {
      reset();
      navigate("/account", { state: { ...data } });
    }
  };

  return (
    <Card onSubmit={handleSubmit(onValid)}>
      {state === "무료 예약" ? <Title>첫 번째 예약</Title> : <Title>{reservationNumber}</Title>}
      <InputMapSection>
        <Label htmlFor="map-link">
          구글 지도 음식점 링크 공유<span className="highlight-red">(필수)</span>
        </Label>
        <Input
          type="url"
          id="map-link"
          {...register("mapUrl", { required: true })}
          placeholder="https://www.google.com/maps"
        />
      </InputMapSection>
      <DropMenuSection>
        <div>
          <Label htmlFor="adult-number">
            성인<span className="highlight-red">(필수)</span>
          </Label>
          <Select {...register("adultNumber")} id="adult-number">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="그외">그외</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="child-number">
            어린이<span className="highlight-red">(필수)</span>
          </Label>
          <Select {...register("childNumber")} id="child-number">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="그외">그외</option>
          </Select>
        </div>
      </DropMenuSection>
      <hr />
      {/* 첫 번째 날짜와 시간 */}
      <DropMenuSection>
        <Calender index={0} control={control} />
        <div>
          <Label htmlFor="first-time">
            시간<span className="highlight-red">(필수)</span>
          </Label>
          <Select {...register("firstTime")} id="first-time">
            <option value="선택">선택</option>
            <option value="09:00">09:00</option>
            <option value="09:30">09:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>
            <option value="17:00">17:00</option>
            <option value="17:30">17:30</option>
            <option value="18:00">18:00</option>
            <option value="18:30">18:30</option>
            <option value="19:00">19:00</option>
            <option value="19:30">19:30</option>
            <option value="20:00">20:00</option>
            <option value="그외">그외</option>
          </Select>
        </div>
        {/* <TimeSelector index={0} control={control} /> */}
      </DropMenuSection>
      {/* 두 번째 날짜와 시간 */}
      <DropMenuSection>
        <Calender index={1} control={control} />
        <div>
          <Label htmlFor="second-time">
            시간<span>(2순위)</span>
          </Label>
          <Select {...register("secondTime")} id="second-time">
            <option value="선택">선택</option>
            <option value="09:00">09:00</option>
            <option value="09:30">09:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>
            <option value="17:00">17:00</option>
            <option value="17:30">17:30</option>
            <option value="18:00">18:00</option>
            <option value="18:30">18:30</option>
            <option value="19:00">19:00</option>
            <option value="19:30">19:30</option>
            <option value="20:00">20:00</option>
            <option value="그외">그외</option>
          </Select>
        </div>
        {/* <TimeSelector index={1} control={control} /> */}
      </DropMenuSection>
      {/* 세 번째 날짜와 시간 */}
      <DropMenuSection>
        <Calender index={2} control={control} />
        <div>
          <Label htmlFor="third-time">
            시간<span>(3순위)</span>
          </Label>
          <Select {...register("thirdTime")} id="third-time">
            <option value="선택">선택</option>
            <option value="09:00">09:00</option>
            <option value="09:30">09:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>
            <option value="17:00">17:00</option>
            <option value="17:30">17:30</option>
            <option value="18:00">18:00</option>
            <option value="18:30">18:30</option>
            <option value="19:00">19:00</option>
            <option value="19:30">19:30</option>
            <option value="20:00">20:00</option>
            <option value="그외">그외</option>
          </Select>
        </div>
        {/* <TimeSelector index={2} control={control} /> */}
      </DropMenuSection>
      {state === "무료 예약" ? (
        <Button>무료 예약 요청</Button>
      ) : (
        <>
          <Paragraph>
            3,000원의 수수료가 발생해요
            <br />
            예약 완료가 되면 수수료가 부가되니 안심하세요
          </Paragraph>
          <Button>예약 확인하기</Button>
        </>
      )}
    </Card>
  );
}

export default Form;
