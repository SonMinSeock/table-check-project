import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { userAtom } from "../../recoil/user/user";
import { Link, useNavigate } from "react-router-dom";
import { collection, doc, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import { fireStore } from "../../database/config";
import { useForm } from "react-hook-form";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-4);
`;

const Main = styled.main`
  padding: var(--space-4);
`;

const Nav = styled.nav`
  width: 35%;
  ul li {
    cursor: pointer;
    text-align: end;
  }
`;

const H1 = styled.h1`
  width: 100%;
  text-align: end;
  font-size: var(--font-size-7);
  font-family: "Nanum Brush Script", cursive;
`;

const H2 = styled.h2`
  font-size: 0.86rem;
  font-weight: bold;
  text-align: center;
  padding: var(--space-4);
`;

const Card = styled.section`
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  border-radius: var(--border-radius-3);
  color: #696969;
  padding: var(--space-4);
  max-height: 520px;
  overflow: auto;
  font-weight: bold;
  margin-bottom: var(--space-4);
`;

const Row = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--space-3);
  font-size: 0.78rem;
  &.adult-child-container {
    flex-direction: row;
    span:first-child,
    span:nth-child(2) {
      margin-right: 0.3rem;
    }
  }
  & .state-text,
  & .text-blue {
    color: var(--color-primary);
  }
  & .state-text-cancle {
    color: var(--color-alert-red);
  }
  & a {
    font-size: 1.02rem;
    color: var(--color-primary);
    &:hover {
      border-bottom: 1px solid var(--color-primary);
    }
    padding: 0.2rem;
  }
`;

const Text = styled.span`
  margin-bottom: var(--space-3);
`;

const Button = styled.button`
  width: 130px;
  color: white;
  &.btn-confirm,
  &.btn-save {
    background-color: var(--color-primary);
  }
  &.btn-cancle {
    background-color: var(--color-alert-red);
    margin-bottom: var(--space-3);
  }
  border: none;
  padding: var(--space-1);
  border-radius: var(--border-radius-3);
  cursor: pointer;
`;

const Form = styled.form`
  & div:first-child {
    margin-bottom: var(--space-3);
  }
  & div:last-of-type {
    display: flex;
    justify-content: center;
  }
`;

const Textarea = styled.textarea`
  border-radius: var(--border-radius-2);
  padding: var(--space-2);
`;

function Admin() {
  // 예약 카드별 토글 상태를 관리하는 배열
  const [toggleStates, setToggleStates] = useState([]);
  const [user, setUser] = useRecoilState(userAtom);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const getReservations = () => {
    const q = query(collection(fireStore, "reservations"), orderBy("createdAt", "asc"));

    onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setReservations(docs);
      // 예약 카드별로 토글 상태 배열 초기화
      setToggleStates(docs.map(() => false));
    });
  };
  useEffect(() => {
    if (!user) {
      return navigate("/admin/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    getReservations();
    setLoading(false);
  }, []);

  const onToggle = (index) => {
    setToggleStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index]; // 해당 인덱스의 토글 상태를 반전
      return newStates;
    });
  };

  const logout = () => {
    setUser(null);
    navigate("/admin/login");
  };

  // 예약 상태 버튼 조작 핸들러
  const onReservationStateControl = async (id, checkReservation, dateTime) => {
    const reservationRef = doc(fireStore, "reservations", id);
    const checkDateTime = dateTime;

    if (checkReservation === "1차") {
      await updateDoc(reservationRef, {
        isFirstDateTimeConfirm: true,
        checkDateTime,
        state: "확정 대기중",
      });
      alert("1차 예약 가능으로 사용자에게 확정 요청했습니다.");
    } else if (checkReservation === "2차") {
      await updateDoc(reservationRef, {
        isSecondDateTimeConfirm: true,
        checkDateTime,
        state: "확정 대기중",
      });
      alert("2차 예약 가능으로 사용자에게 확정 요청했습니다.");
    } else if (checkReservation === "3차") {
      await updateDoc(reservationRef, {
        isThirdDateTimeConfirm: true,
        checkDateTime,
        state: "확정 대기중",
      });
      alert("3차 예약 가능으로 사용자에게 확정 요청했습니다.");
    }
  };

  const updateCancleMessageState = async (id, message) => {
    const reservationRef = doc(fireStore, "reservations", id);
    await updateDoc(reservationRef, {
      isCancleMessage: message,
      state: "예약 불가",
      cancleResponseDateTime: `${String(new Date().getMonth() + 1).padStart(2, "0")}월 ${String(
        new Date().getDate()
      ).padStart(2, "0")}일 | ${new Date().toTimeString().slice(0, 8)}`,
    });
  };

  // 어드민 해당 예약에 메시지를 작성하는 함수
  const updateMessageState = async (id, message) => {
    const reservationRef = doc(fireStore, "reservations", id);
    await updateDoc(reservationRef, {
      message: message,
    });
  };

  // 예약자 일본어 필드 업데이트 해주는 함수.
  const updateReservationUsernameJPN = async (id, reservationUsernameJPN) => {
    const reservationRef = doc(fireStore, "reservations", id);
    await updateDoc(reservationRef, {
      reservationUsernameJPN: reservationUsernameJPN,
    });
  };

  const onCancleMessageValid = async (id, data, index) => {
    await updateCancleMessageState(id, data[`cancleMessage-${index}`]);
    alert("예약 불가 사용자에게 응답했습니다.");
  };

  const onMessageValid = async (id, data, index) => {
    await updateMessageState(id, data[`message-${index}`]);

    alert("해당 예약에 대해 메시지 작성 완료 했습니다.");
  };

  // 예약자 일본어 폼 제출 핸들러.
  const onUsernameTurnJPNValid = async (id, data, index) => {
    await updateReservationUsernameJPN(id, data[`reservationUsernameJPN-${index}`]);
    alert("일본어 예약자 작성 완료 했습니다.");
  };

  // 예약 상태 표기
  const showReservationState = (reservation) => {
    if (reservation.state === "예약 요청중" || reservation.state === "예약 불가" || reservation.state === "자동 취소") {
      return `현재 상태(${reservation.state})`;
    } else {
      if (reservation.isFirstDateTimeConfirm) {
        return `현재 상태(1차 ${reservation.state})`;
      } else if (reservation.isSecondDateTimeConfirm) {
        return `현재 상태(2차 ${reservation.state})`;
      } else if (reservation.isThirdDateTimeConfirm) {
        return `현재 상태(3차 ${reservation.state})`;
      }
    }
  };

  const showCards = () => {
    const renderCards = reservations.map((reservation, index) => (
      <Card key={reservation.id}>
        <H2>{`${index + 1}. ${reservation.username}(${reservation.phoneNumber} | ${
          reservation.reservationNumber
        })`}</H2>
        <Row>
          <Text>예약 요청한 날짜 시간</Text>
          <span>{`${reservation.requestDateTime}`}</span>
        </Row>
        <Row>
          <span className={reservation.state !== "예약 불가" ? "state-text" : "state-text-cancle"}>
            {showReservationState(reservation)}
          </span>
          {/* <span className="state-text-cancle">현재 상태(자동 취소)</span> */}
        </Row>
        <Row className="adult-child-container">
          <Text>{`성인(${reservation.adultNumber}명)`}</Text>
          <Text>|</Text>
          <Text>{` 어린이(${reservation.childNumber}명)`}</Text>
        </Row>
        <hr />
        <Row>
          <Link to={reservation.mapUrl} target="_blank">
            구글 지도 음식점 링크
          </Link>
        </Row>

        <Row>
          {reservation.firstDate && reservation.firstTime ? (
            <Row>
              <Text>{`1차 예약 시간 : ${reservation.firstDate} | ${reservation.firstTime}`}</Text>
              <Button
                className="btn-confirm"
                onClick={() =>
                  onReservationStateControl(reservation.id, "1차", `${reservation.firstDate} ${reservation.firstTime}`)
                }
              >
                1차 예약 가능
              </Button>
            </Row>
          ) : null}
          {reservation.secondDate && reservation.secondTime ? (
            <Row>
              <Text>{`2차 예약 시간 : ${reservation.secondDate} | ${reservation.secondTime}`}</Text>
              <Button
                className="btn-confirm"
                onClick={() =>
                  onReservationStateControl(
                    reservation.id,
                    "2차",
                    `${reservation.secondDate} ${reservation.secondTime}`
                  )
                }
              >
                2차 예약 가능
              </Button>
            </Row>
          ) : null}
          {reservation.thirdDate && reservation.thirdTime ? (
            <Row>
              <Text>{`3차 예약 시간 : ${reservation.thirdDate} | ${reservation.thirdTime}`}</Text>
              <Button
                className="btn-confirm"
                onClick={() =>
                  onReservationStateControl(reservation.id, "3차", `${reservation.thirdDate} ${reservation.thirdTime}`)
                }
              >
                3차 예약 가능
              </Button>
            </Row>
          ) : null}
          {/* <Row>
              <span className="text-blue">1차 예약 가능 보낸시간 : 2024.02.04 | 13:50</span>
            </Row> */}
        </Row>
        <hr />
        <Row>
          <Button className="btn-cancle" onClick={() => onToggle(index)}>
            예약 불가
          </Button>

          <Form onSubmit={handleSubmit((data) => onCancleMessageValid(reservation.id, data, index))}>
            {toggleStates[index] && ( // 해당 카드의 토글 상태에 따라 보여주기
              <>
                <div>
                  <Textarea
                    {...register(`cancleMessage-${index}`)}
                    rows={6}
                    defaultValue={reservation.isCancleMessage}
                  ></Textarea>
                </div>
                <div>
                  <Button className="btn-save">저장</Button>
                </div>
              </>
            )}
          </Form>
        </Row>
        <hr />
        <Row>
          <Text>일본어 예약자 작성</Text>
          <Form onSubmit={handleSubmit((data) => onUsernameTurnJPNValid(reservation.id, data, index))}>
            <div>
              <Textarea
                {...register(`reservationUsernameJPN-${index}`)}
                rows={6}
                defaultValue={reservation.reservationUsernameJPN}
              ></Textarea>
            </div>
            <div>
              <Button className="btn-save">저장</Button>
            </div>
          </Form>
        </Row>
        <hr />
        <Row>
          <Text>메시지 작성</Text>
          <Form onSubmit={handleSubmit((data) => onMessageValid(reservation.id, data, index))}>
            <div>
              <Textarea {...register(`message-${index}`)} rows={6} defaultValue={reservation.message}></Textarea>
            </div>
            <div>
              <Button className="btn-save">저장</Button>
            </div>
          </Form>
        </Row>
        {reservation.responseDateTime && (
          <>
            <hr />
            <Row>
              <Text>예약 확정 응답 시간</Text>
              <span className="text-blue">{reservation.responseDateTime}</span>
            </Row>
          </>
        )}
        {reservation.cancleResponseDateTime && (
          <>
            <hr />
            <Row>
              <Text>예약 불가 응답 시간</Text>
              <span className="state-text-cancle">{reservation.cancleResponseDateTime}</span>
            </Row>
          </>
        )}
      </Card>
    ));

    return renderCards;
  };

  return (
    <>
      <Header>
        <H1>오마타세 관리자</H1>
        <Nav>
          <ul>
            <li onClick={logout}>로그아웃</li>
          </ul>
        </Nav>
      </Header>
      <Main>{reservations.length === 0 ? <H2>예약 내역</H2> : showCards()}</Main>
    </>
  );
}

export default Admin;
