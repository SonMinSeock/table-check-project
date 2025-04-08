import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoCheckmark } from "react-icons/io5";
import DifrentTypeHeader from "../../../components/header/account/DifrentTypeHeader";
import { doc, updateDoc } from "firebase/firestore";
import { fireStore } from "../../../database/config";
import { Button } from "../../../styles/components/Button.style";
import {
  TitleH1,
  Paragraph,
  Card,
  CardHeader,
  Title,
  Wrapper,
  CardContentFlex,
  CardContentLabel,
  CardContentText,
  CartContentMap,
  CheckConfirm,
  ButtonWrapper,
} from "../../../styles/pages/reservation/confirm/ReservationConfirm.style";

function ReservationConfirm() {
  const navigate = useNavigate();
  const {
    state: {
      reservation: {
        id,
        adultNumber,
        childNumber,
        mapUrl,
        firstDate,
        firstTime,
        secondDate,
        secondTime,
        thirdDate,
        thirdTime,
        isFirstDateTimeConfirm,
        isSecondDateTimeConfirm,
        isThirdDateTimeConfirm,
        checkDateTime,
        reservationNumber,
      },
    },
  } = useLocation();
  return (
    <>
      <DifrentTypeHeader />
      <TitleH1>
        다시 한번 더<br /> 예약 정보를 확인해 주세요
      </TitleH1>
      <Paragraph>
        예약 취소는 불가하지만 만약 취소를 해야 한다
        <br /> 문의하기를 통해 꼭 알려주세요
      </Paragraph>
      <Card>
        <CardHeader>
          <Title>{reservationNumber}</Title>
        </CardHeader>
        <CartContentMap>
          <CardContentLabel>구글 지도 음식점 링크 공유</CardContentLabel>
          <Link to={mapUrl} target="_blank">
            {mapUrl}
          </Link>
        </CartContentMap>
        <CardContentFlex>
          <Wrapper>
            <CardContentLabel>성인</CardContentLabel>
            <CardContentText>{adultNumber}</CardContentText>
          </Wrapper>
          <Wrapper>
            <CardContentLabel>어린이</CardContentLabel>
            <CardContentText>{childNumber}</CardContentText>
          </Wrapper>
        </CardContentFlex>
        <hr />

        {isFirstDateTimeConfirm && (
          <CardContentFlex className={isFirstDateTimeConfirm ? "confirmed" : null}>
            <Wrapper>
              <CardContentLabel>날짜</CardContentLabel>
              <CardContentText>{firstDate}</CardContentText>
            </Wrapper>
            <Wrapper>
              <CardContentLabel>시간</CardContentLabel>
              <CardContentText>{firstTime}</CardContentText>
            </Wrapper>
            {isFirstDateTimeConfirm && (
              <CheckConfirm>
                <IoCheckmark color="white" size={13} />
              </CheckConfirm>
            )}
          </CardContentFlex>
        )}
        {isSecondDateTimeConfirm && (
          <CardContentFlex className={isSecondDateTimeConfirm ? "confirmed" : null}>
            <Wrapper>
              <CardContentLabel>날짜</CardContentLabel>
              <CardContentText>{secondDate}</CardContentText>
            </Wrapper>
            <Wrapper>
              <CardContentLabel>시간</CardContentLabel>
              <CardContentText>{secondTime}</CardContentText>
            </Wrapper>
            {isSecondDateTimeConfirm && (
              <CheckConfirm>
                <IoCheckmark color="white" size={13} />
              </CheckConfirm>
            )}
          </CardContentFlex>
        )}
        {isThirdDateTimeConfirm && (
          <CardContentFlex className={isThirdDateTimeConfirm ? "confirmed" : null}>
            <Wrapper>
              <CardContentLabel>날짜</CardContentLabel>
              <CardContentText>{thirdDate}</CardContentText>
            </Wrapper>
            <Wrapper>
              <CardContentLabel>시간</CardContentLabel>
              <CardContentText>{thirdTime}</CardContentText>
            </Wrapper>
            {isThirdDateTimeConfirm && (
              <CheckConfirm>
                <IoCheckmark color="white" size={13} />
              </CheckConfirm>
            )}
          </CardContentFlex>
        )}
      </Card>

      <ButtonWrapper>
        <Button
          onClick={async () => {
            const reservationRef = doc(fireStore, "reservations", id);

            await updateDoc(reservationRef, {
              state: "예약 확정",
              responseDateTime: `${String(new Date().getMonth() + 1).padStart(2, "0")}월 ${String(
                new Date().getDate()
              ).padStart(2, "0")}일 | ${new Date().toTimeString().slice(0, 8)}`,
            });
            navigate("final", { state: { message: "예약 확정" } });
          }}
        >{`${checkDateTime} 확정하기`}</Button>
      </ButtonWrapper>
    </>
  );
}

export default ReservationConfirm;
