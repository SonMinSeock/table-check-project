import styled from "styled-components";
import ReservationCard from "../../components/card/ReservationCard";
import { Button } from "../../components/form/includes/form-style";
import { useNavigate } from "react-router-dom";
import Guide from "../../components/guide/Guide";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userIdAtom } from "../../recoil/user/user";
import { reservationsAtom } from "../../recoil/reservation/reservation";
import { readReservations } from "../../model/reservation";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { fireStore } from "../../database/config";

const Main = styled.main`
  height: calc(100vh - 70px - 111px);
  overflow: scroll;
`;
const Footer = styled.footer`
  position: fixed;
  width: 100%;
  height: 88px;
  max-width: 430px;
  bottom: 0;
  background-color: var(--color-gray-900);
  /* padding: var(--space-8) var(--space-4); */
  & button {
    height: 100%;
    font-size: 23px;
  }
`;

const EmptyTitle = styled.h1`
  color: #000000;
  font-size: 1.5rem;
  font-weight: bold;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingTitle = styled(EmptyTitle)``;

function Reservation() {
  const [reservations, setReservations] = useRecoilState(reservationsAtom);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getUserId = useRecoilValue(userIdAtom);

  useEffect(() => {
    if (getUserId) {
      const q = query(
        collection(fireStore, "reservations"),
        where("userId", "==", getUserId),
        orderBy("createdAt", "asc")
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setReservations(docs);
      });

      setLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 설정합니다.
      // useEffect 클린업 함수에서 구독 해제를 수행합니다.
      return () => unsubscribe();
    } else {
      navigate("/");
    }
    setLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 설정합니다.
  }, [getUserId, setReservations]);

  const showReservations = () => {
    if (loading) {
      return <LoadingTitle>불러오고 있습니다.</LoadingTitle>;
    } else {
      if (reservations.length !== 0) {
        return reservations.map((reservation) => <ReservationCard key={reservation.id} reservation={reservation} />);
      } else {
        return <EmptyTitle>예약 내역이 없습니다.</EmptyTitle>;
      }
    }
  };

  return (
    <>
      <Main>
        <Guide />
        {showReservations()}
      </Main>
      <Footer>
        <Button onClick={() => navigate("/user/reservation/plus", { state: { reservations } })}>추가로 예약하기</Button>
      </Footer>
    </>
  );
}

export default Reservation;
