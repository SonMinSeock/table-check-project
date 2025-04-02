import { atom } from "recoil";

// user 정보
/*
{
  "id": "fby2HgB3nsjzraOdu11g", // 유저 id
  "username": "name", // 유저 이름
  "reservationIdList": [
      "Ryl3Tsi6HXSVpPwsftqv"
  ], // 예약 카드 id
  "phoneNumber": "01082592538", // 연락처
  "createdAt": "2025. 4. 2. 오전 12:21:14" // 예약 작성한 시간
}
*/

export const userAtom = atom({
  key: "user",
  default: null,
});

export const userIdAtom = atom({
  key: "userId",
  default: null,
});
