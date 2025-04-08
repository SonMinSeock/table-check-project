import ReservationCard from "../../components/card/ReservationCard";
import { useNavigate } from "react-router-dom";
import Guide from "../../components/guide/Guide";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAtom, userIdAtom } from "../../recoil/user/user";
import { reservationsAtom } from "../../recoil/reservation/reservation";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { fireStore } from "../../database/config";
import { BigButton } from "../../styles/components/Button.style";
import { Main, LoadingTitle, EmptyTitle, Footer } from "../../styles/pages/reservation/Reservation.style";

function Reservation() {
  const [reservations, setReservations] = useRecoilState(reservationsAtom);
  const user = useRecoilValue(userAtom);
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
  }, [getUserId, setReservations, navigate]);

  const showReservations = () => {
    if (loading) {
      return <LoadingTitle>불러오고 있습니다.</LoadingTitle>;
    } else {
      if (reservations.length !== 0) {
        return reservations.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} user={user} />
        ));
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
        <BigButton onClick={() => navigate("/user/reservation/plus", { state: { reservations } })}>
          추가로 예약하기
        </BigButton>
      </Footer>
    </>
  );
}

export default Reservation;
