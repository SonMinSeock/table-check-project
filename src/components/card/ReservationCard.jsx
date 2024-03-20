import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../form/includes/form-style";
import { IoCheckmark } from "react-icons/io5";

const Card = styled.section`
  background-color: var(--color-white);
  margin: var(--space-4);
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
  &.cancle {
    border-color: var(--color-alert-red);
  }
  &.confirm {
    border: 2px solid var(--color-primary);
  }
`;

const CardHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-4);
`;

const Title = styled.h2`
  font-size: var(--font-size-6);
  font-weight: 600;
`;

const StatusText = styled.span`
  width: 125px;
  text-align: center;
  font-size: var(--font-size-3);
  color: #ffffff;
  background-color: var(--color-primary);
  padding: var(--space-2) var(--space-5);
  border-radius: var(--border-radius-3);
  font-weight: 600;
`;

const CancleStatusText = styled(StatusText)`
  background-color: var(--color-alert-red);
`;

const CardContentContainer = styled.section`
  position: relative;
  border: 1px solid #717171;
  padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-4);
  border-radius: var(--border-radius-3);
  font-size: var(--font-size-3);

  & a {
    color: #5e5e5e;
    overflow: hidden;

    &:hover {
      border-bottom: 1px solid #000000;
    }
  }
  &.confirmed {
    border: 2px solid var(--color-primary);
  }
`;

const CartContentMap = styled(CardContentContainer)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CardContentLabel = styled.span`
  display: block;
  margin-bottom: var(--space-2);
  font-size: var(--font-size-3);
  font-weight: 600;
`;
const CardContentFlex = styled(CardContentContainer)`
  display: flex;
`;
const CardContentText = styled.span`
  font-size: var(--font-size-3);
`;
const Wrapper = styled.div`
  width: 100%;
  &:nth-child(2) {
    padding-left: 10px;
    border-left: 1px solid #000000;
  }
`;
const CheckConfirm = styled.div`
  position: absolute;
  top: -7px;
  right: -7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #ffffff;
  width: 15px;
  height: 15px;
  padding: 2px;
  background-color: var(--color-primary);
`;

const Paragraph = styled.p`
  color: #86898f;
  margin: var(--space-4) 0;
  font-size: 0.82rem;
  font-weight: bold;
`;

const CancleParagraph = styled(Paragraph)`
  color: var(--color-alert-red);
`;

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
