// 예약 작성 폼
import Calender from "../calender/Calender";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { reservationAtom, reservationsAtom } from "../../recoil/reservation/reservation";
import { dateAtom } from "../../recoil/date/date";
import { userAtom, userIdAtom } from "../../recoil/user/user";
import { accountUser } from "../../model/user";
import Loading from "../loading/Loading";
import {
  Card,
  DropMenuSection,
  Input,
  InputMapSection,
  Label,
  Paragraph,
  Select,
  Title,
} from "../../styles/components/form/Form.style";
import { Button } from "../../styles/components/Button.style";
import { getReservationNumber } from "../../util/reservation-number";

function Form() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  // 예약 정보는 setReservation으로 업데이트되고, 날짜 정보는 setDateTime으로 관리한다.
  const setReservation = useSetRecoilState(reservationAtom);
  const [getDateTime, setDateTime] = useRecoilState(dateAtom);
  const reservations = useRecoilValue(reservationsAtom);

  // 첫 예약 할시 유저 생성
  // 유저 상태데이터 불러오기
  const getUser = useRecoilValue(userAtom);
  // 유저 아이디 불러오기
  const getUserId = useRecoilValue(userIdAtom);

  const navigate = useNavigate();

  // 성인, 어린이 수 선택 항목
  const numberOptions = ["0", "1", "2", "3", "4", "5", "6", "그외"];

  // 시간 선택 항목
  const timeOptions = [
    "선택",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "그외",
  ];

  // validateDateTimeSelection: 예약 날짜와 시간 선택 여부를 검사
  const validateDateTimeSelection = (data) => {
    // 1차는 필수
    if (!getDateTime.firstDate || data.firstTime === "선택") {
      alert("1차 예약 날짜 또는 시간을 선택하지 않았습니다!");
      return false;
    }

    // 2차와 3차는 하나라도 선택됐으면 둘 다 선택되어 있어야 함
    const optionalSteps = [
      { label: "2차", date: getDateTime.secondDate, time: data.secondTime },
      { label: "3차", date: getDateTime.thirdDate, time: data.thirdTime },
    ];

    for (const step of optionalSteps) {
      const isDateSelected = !!step.date;
      const isTimeSelected = step.time !== "선택";

      if (isDateSelected !== isTimeSelected) {
        alert(`${step.label} 예약 날짜와 시간을 모두 선택해주세요!`);
        return false;
      }
    }

    return true;
  };

  const onValid = async (data) => {
    // 예약 날짜와 시간 선택 여부를 검사
    if (!validateDateTimeSelection(data)) {
      return;
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
    });

    if (getUserId) {
      await accountUser({
        ...getUser,
        reservation: {
          adultNumber: data.adultNumber, // 성인 수
          childNumber: data.childNumber, // 어린이 수
          mapUrl: data.mapUrl, // 지도 URL
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
    <>
      {isSubmitting && <Loading />}
      <Card onSubmit={handleSubmit(onValid)}>
        {(reservations.length === 0) === "무료 예약" ? (
          <Title>첫 번째 예약</Title>
        ) : (
          <Title>{getReservationNumber(reservations)}</Title>
        )}
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
              {numberOptions.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor="child-number">
              어린이<span className="highlight-red">(필수)</span>
            </Label>
            <Select {...register("childNumber")} id="child-number">
              {numberOptions.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
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
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Select>
          </div>
        </DropMenuSection>
        {/* 두 번째 날짜와 시간 */}
        <DropMenuSection>
          <Calender index={1} control={control} />
          <div>
            <Label htmlFor="second-time">
              시간<span>(2순위)</span>
            </Label>
            <Select {...register("secondTime")} id="second-time">
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Select>
          </div>
        </DropMenuSection>
        {/* 세 번째 날짜와 시간 */}
        <DropMenuSection>
          <Calender index={2} control={control} />
          <div>
            <Label htmlFor="third-time">
              시간<span>(3순위)</span>
            </Label>
            <Select {...register("thirdTime")} id="third-time">
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Select>
          </div>
        </DropMenuSection>
        {reservations === 0 ? (
          <Button>무료 예약 요청</Button>
        ) : (
          <>
            <Paragraph>
              3,000원의 수수료가 발생해요
              <br />
              예약 완료가 되면 수수료가 부가되니 안심하세요
            </Paragraph>
            <Button>예약 요청</Button>
          </>
        )}
      </Card>
    </>
  );
}

export default Form;
