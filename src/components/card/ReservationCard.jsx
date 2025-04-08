import { Link, useNavigate } from "react-router-dom";
import { IoCheckmark } from "react-icons/io5";
import { Button } from "../../styles/components/Button.style";
import {
  CancleStatusText,
  Card,
  CardHeader,
  StatusText,
  Title,
  CartContentMap,
  CardContentLabel,
  CardContentFlex,
  Wrapper,
  CardContentText,
  CheckConfirm,
  Paragraph,
  CancleParagraph,
} from "../../styles/components/card/ReservationCard.style";

function ReservationCard({
  user: { username },
  reservation: {
    id,
    state,
    adultNumber,
    childNumber,
    mapUrl,
    firstDate,
    firstTime,
    secondDate,
    secondTime,
    thirdDate,
    thirdTime,
    isCancleMessage,
    isFirstDateTimeConfirm,
    isSecondDateTimeConfirm,
    isThirdDateTimeConfirm,
    checkDateTime,
    reservationNumber,
    reservationUsernameJPN,
  },
}) {
  const navigate = useNavigate();
  const showBorderColor = () => {
    if (state === "예약 불가" || state === "자동 취소") {
      return "cancle";
    } else if (state === "예약 확정") {
      return "confirm";
    }

    return "";
  };

  return (
    <>
      <Card className={showBorderColor()}>
        <CardHeader>
          <Title>{reservationNumber}</Title>
          {state === "예약 불가" || state === "자동 취소" ? (
            <CancleStatusText>{state}</CancleStatusText>
          ) : (
            <StatusText>{state}</StatusText>
          )}
        </CardHeader>
        <CartContentMap>
          <CardContentLabel>구글 지도 음식점 링크 공유</CardContentLabel>
          <Link to="https://www.google.com/maps" target="_blank">
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
        {state !== "예약 확정" && firstDate && firstTime && (
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
        {state === "예약 확정" && isFirstDateTimeConfirm && (
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
        {state !== "예약 확정" && secondDate && secondTime && (
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
        {state === "예약 확정" && isSecondDateTimeConfirm && (
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
        {state !== "예약 확정" && thirdDate && thirdTime && (
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
        {state === "예약 확정" && isThirdDateTimeConfirm && (
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
        {state === "예약 요청중" ? <Paragraph>예약 가능 여부를 확인 후 안내 문자를 보내드릴게요</Paragraph> : null}
        {state === "예약 불가" ? <CancleParagraph>{isCancleMessage}</CancleParagraph> : null}
        {state === "자동 취소" ? (
          <CancleParagraph>예약 확정이 되지 않아 자동으로 취소 되었습니다.</CancleParagraph>
        ) : null}
        {state === "확정 대기중" ? (
          <Button
            onClick={() => {
              navigate("/user/reservation/confirm/check", {
                state: {
                  reservation: {
                    id,
                    state,
                    adultNumber,
                    childNumber,
                    mapUrl,
                    firstDate,
                    firstTime,
                    secondDate,
                    secondTime,
                    thirdDate,
                    thirdTime,
                    isCancleMessage,
                    isFirstDateTimeConfirm,
                    isSecondDateTimeConfirm,
                    isThirdDateTimeConfirm,
                    checkDateTime,
                    reservationNumber,
                  },
                },
              });
            }}
          >{`${checkDateTime} 확정하기`}</Button>
        ) : null}
        {state === "예약 확정" ? (
          <Button
            onClick={() =>
              navigate("/reservation/confirm/jpn", {
                state: {
                  reservationUsernameJPN: reservationUsernameJPN,
                  checkDateTime: checkDateTime,
                  username: username,
                },
              })
            }
          >
            예약 일본어 보여주기
          </Button>
        ) : null}
      </Card>
    </>
  );
}

export default ReservationCard;
