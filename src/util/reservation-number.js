// 몇 번째 예약에대한 텍스트들 구성한 배열
export const reservationNumber = [
  "첫 번째 예약",
  "두 번째 예약",
  "세 번째 예약",
  "네 번째 예약",
  "다섯 번째 예약",
  "그외 예약",
];

/**
 * 예약 리스트 길이에 따라 몇 번째 예약인지 텍스트를 반환하는 함수
 *
 * @param {Array} reservations - 예약 목록 배열
 * @returns {string} - 예약 순서를 나타내는 텍스트
 */

export function getReservationNumber(reservations) {
  const reservationsLength = reservations.length;

  if (reservationsLength === 0) {
    return reservationNumber[reservationsLength];
  } else if (reservationsLength === 1) {
    return reservationNumber[1];
  } else if (reservationsLength === 2) {
    return reservationNumber[2];
  } else if (reservationsLength === 3) {
    return reservationNumber[3];
  } else if (reservationsLength === 4) {
    return reservationNumber[4];
  } else {
    return reservationNumber[5];
  }
}
