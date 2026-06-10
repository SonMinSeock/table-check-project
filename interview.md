# 오마타세(Omatase) 프로젝트 - 면접 준비 가이드

## 📋 면접 정보
- **일시**: 2026년 1월 2일
- **포지션**: 풀스택 개발자 (신입)
- **프로젝트**: 오마타세 (일본 음식점 예약 대행 서비스)

---

## 1️⃣ 프로젝트 개요 (30초 엘리베이터 피치)

> "오마타세는 일본 여행을 계획하는 한국인이 언어 장벽 없이 일본 현지 음식점을 예약할 수 있도록 돕는 예약 대행 웹 서비스입니다. 일본은 전화 예약이 일반적이고 영어 소통이 어려운 경우가 많아, 저희 서비스가 중간에서 예약을 대행해드립니다. 첫 예약은 무료로 제공하며, React와 Firebase를 활용한 서버리스 풀스택 애플리케이션입니다."

**핵심 가치**:
- 언어 장벽 해소
- 전화 예약 대행
- 실시간 예약 상태 확인

**개발 기간**: 2024.02.05 ~ 2024.02.25 (약 3주)

**배포 URL**: https://omatase.netlify.app/

---

## 2️⃣ 기술 스택과 선택 이유

### Frontend
| 기술 | 버전 | 선택 이유 |
|------|------|-----------|
| **React** | 18.2.0 | 컴포넌트 기반 UI로 재사용성과 유지보수성 향상 |
| **Recoil** | 0.7.7 | React와 유사한 API로 학습 곡선이 낮고, 전역 상태 관리 간편 |
| **styled-components** | 6.1.8 | CSS-in-JS로 컴포넌트별 스타일 캡슐화, props 기반 동적 스타일링 |
| **react-hook-form** | 7.49.3 | 폼 상태 관리 및 검증 로직 단순화 |
| **react-datepicker** | 4.25.0 | 날짜 선택 UI 일관성, 커스터마이징 용이 |

### Backend
| 기술 | 버전 | 선택 이유 |
|------|------|-----------|
| **Firebase Firestore** | 10.7.2 | NoSQL 실시간 데이터베이스, 서버리스 아키텍처로 빠른 개발 가능 |
| **Firebase Analytics** | 10.7.2 | 사용자 행동 분석 |

### 배포
- **Netlify**: 간편한 CI/CD, 무료 호스팅

---

## 3️⃣ 주요 기능 상세

### 3.1 예약 시스템 (핵심 기능)

**예약 프로세스**:
```
1. 사용자: 구글 맵 음식점 URL + 인원 수 입력
2. 사용자: 1차/2차/3차 희망 날짜·시간 선택 (1차 필수)
3. 시스템: Firebase에 예약 저장 (상태: "예약 요청중")
4. 관리자: 음식점에 전화 → 가능한 날짜 확인
5. 관리자: 1/2/3차 중 하나를 "확정 대기중"으로 변경
6. 사용자: 확정 버튼 클릭 → "예약 확정"
7. 사용자: 일본어 예약 정보 확인 (체크인용)
```

**예약 상태 전환**:
```
예약 요청중 → 확정 대기중 → 예약 확정
            ↘ 예약 불가
            ↘ 자동 취소
```

### 3.2 사용자 기능

- **예약 조회**: 이름 + 전화번호로 예약 내역 확인 (로그인 없음)
- **예약 확정**: 관리자 승인 후 사용자가 최종 확정
- **일본어 정보 확인**: 예약 확정 후 일본어 예약자명·날짜·시간 표시
- **다중 예약**: 첫 예약 무료, 이후 3,000원

### 3.3 관리자 기능

- **실시간 예약 대시보드**: Firebase onSnapshot으로 실시간 업데이트
- **상태 조작**: 1/2/3차 예약 가능 버튼, 예약 불가 처리
- **메시지 작성**: 예약 불가 사유, 추가 안내 메시지
- **일본어 이름 입력**: 체크인용 일본어 예약자명 작성

---

## 4️⃣ 컴포넌트 구조

### 폴더 구조
```
src/
├── components/        # 재사용 컴포넌트
│   ├── card/          # ReservationCard (예약 카드)
│   ├── calender/      # Calender (날짜 선택)
│   ├── form/          # Form (예약 폼), AccountForm
│   ├── header/        # 헤더 컴포넌트
│   ├── layout/        # RootLayout, AdminLayout 등
│   └── loading/       # Loading 컴포넌트
│
├── pages/             # 페이지 컴포넌트
│   ├── home/          # Home (메인 페이지)
│   ├── account/       # Account, AccountConfirm
│   ├── reservation/   # Reservation, ReservationConfirm
│   ├── admin/         # Admin, AdminLogin
│   └── contact/       # Contact (문의)
│
├── recoil/            # Recoil 상태 관리
│   ├── user/          # userAtom, userIdAtom
│   ├── reservation/   # reservationAtom, reservationsAtom
│   └── date/          # dateAtom (1차/2차/3차 날짜)
│
├── model/             # 비즈니스 로직
│   ├── user.js        # 유저 CRUD (Firestore)
│   └── reservation.js # 예약 CRUD (Firestore)
│
├── styles/            # styled-components
│   ├── components/    # 컴포넌트별 스타일
│   └── pages/         # 페이지별 스타일
│
└── routes/            # React Router 설정
```

### 컴포넌트 설계 원칙

1. **Presentational vs Container 분리**
   - `components/`: 재사용 가능한 UI 컴포넌트
   - `pages/`: 페이지 단위 컨테이너 컴포넌트

2. **모델 레이어 분리**
   - `model/user.js`, `model/reservation.js`로 Firestore 로직 캡슐화
   - 컴포넌트에서 Firebase를 직접 호출하지 않음

3. **스타일 컴포넌트 분리**
   - `styles/components/`, `styles/pages/`로 스타일 코드 분리
   - 재사용성과 유지보수성 향상

---

## 5️⃣ Firebase DB 작업

### Firestore 컬렉션 구조

#### `users` 컬렉션
```javascript
{
  id: "fby2HgB3nsjzraOdu11g",
  username: "손민석",
  phoneNumber: "01012345678",
  createdAt: "2024. 2. 6. 오후 3:21:14",
  reservationIdList: ["reservation-id-1", "reservation-id-2"]
}
```

#### `reservations` 컬렉션
```javascript
{
  id: "Ryl3Tsi6HXSVpPwsftqv",
  userId: "fby2HgB3nsjzraOdu11g",
  username: "손민석",
  phoneNumber: "01012345678",
  adultNumber: "2",
  childNumber: "0",
  mapUrl: "https://www.google.com/maps/...",

  // 1차/2차/3차 희망 날짜·시간
  firstDate: "02월 20일",
  firstTime: "18:00",
  secondDate: "02월 21일",
  secondTime: "19:00",
  thirdDate: null,
  thirdTime: "선택",

  // 어떤 날짜가 승인되었는지
  isFirstDateTimeConfirm: false,
  isSecondDateTimeConfirm: true,  // 2차가 승인됨
  isThirdDateTimeConfirm: false,

  // 상태 관리
  state: "확정 대기중",
  checkDateTime: "02월 21일 19:00",  // 확정된 날짜·시간

  // 메시지
  isCancleMessage: "",  // 예약 불가 사유
  message: "",          // 추가 안내

  // 기타
  reservationNumber: "첫 번째 예약",
  reservationUsernameJPN: "ソン ミンソク",
  pay: "무료",
  requestDateTime: "02월 20일 | 14:30:00",
  responseDateTime: "",
  cancleResponseDateTime: "",
  createdAt: 1708412000000
}
```

### 주요 Firestore 로직

**위치**: `src/model/user.js:22-120`

```javascript
export async function accountUser(inputData) {
  // 1. 기존 유저 확인 (이름 + 전화번호)
  const users = await getDocs(query(collection(fireStore, "users")));
  let isUser = false;
  let userId;

  users.forEach((doc) => {
    if (doc.data().phoneNumber === inputData.phoneNumber
        && doc.data().username === inputData.username) {
      isUser = true;
      userId = doc.id;
    }
  });

  if (!isUser) {
    // 2. 첫 유저: User 생성 + 무료 예약
    const userDoc = await addDoc(collection(fireStore, "users"), userData);
    const reservationDoc = await addReservation({
      ...inputData.reservation,
      userId: userDoc.id,
      reservationNumber: "첫 번째 예약",
      pay: "무료"
    });

    // 3. User에 reservationIdList 추가
    await updateDoc(userDoc, {
      reservationIdList: [reservationDoc.id]
    });
  } else {
    // 4. 기존 유저: 유료 예약 생성
    const reservations = await getReservations(userId);
    await addReservation({
      ...inputData.reservation,
      userId: userId,
      reservationNumber: getReservationNumber(reservations),  // "두 번째 예약"
      pay: "유료"
    });
  }
}
```

**실시간 동기화**: `src/pages/admin/Admin.jsx:32-47`

```javascript
const getReservations = () => {
  const q = query(
    collection(fireStore, "reservations"),
    orderBy("createdAt", "asc")
  );

  // onSnapshot: Firestore 실시간 리스너
  onSnapshot(q, (snapshot) => {
    const docs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setReservations(docs);
  });
};
```

---

## 6️⃣ Recoil 상태 관리

### Atom 정의

**위치**: `src/recoil/user/user.js`
```javascript
export const userAtom = atom({
  key: "userAtom",
  default: {
    id: "",
    username: "",
    reservationIdList: [],
    phoneNumber: "",
    createdAt: "",
  },
});

export const userIdAtom = atom({
  key: "userIdAtom",
  default: "",
});
```

**위치**: `src/recoil/reservation/reservation.js`
```javascript
export const reservationAtom = atom({
  key: "reservationAtom",
  default: {
    username: "",
    phoneNumber: "",
    // ... 예약 정보
  },
});

export const reservationsAtom = atom({
  key: "reservationsAtom",
  default: [],  // 사용자의 전체 예약 목록
});
```

**위치**: `src/recoil/date/date.js`
```javascript
export const dateAtom = atom({
  key: "dateAtom",
  default: {
    firstDate: null,
    secondDate: null,
    thirdDate: null,
  },
});
```

### 사용 예시

**DatePicker와 Recoil 통합**: `src/components/calender/Calender.jsx:49-102`

```javascript
const [getDateTime, setDateTime] = useRecoilState(dateAtom);

<Controller
  name="firstDate"
  control={control}
  rules={{ required: true }}
  render={({ field: { value, onChange } }) => (
    <DatePicker
      selected={value}
      onChange={(date) => {
        const dateString = `${month}월 ${day}일`;

        // Recoil 상태 업데이트
        setDateTime((prev) => ({
          ...prev,
          firstDate: dateString,
        }));

        // react-hook-form 상태 업데이트
        onChange(date);
      }}
    />
  )}
/>
```

---

## 7️⃣ 스타일 정의 (styled-components)

### 스타일 컴포넌트 분리

**폴더 구조**:
```
src/styles/
├── components/
│   ├── card/
│   │   └── ReservationCardStyle.jsx
│   ├── calender/
│   │   └── CalenderStyle.jsx
│   └── form/
│       └── FormStyle.jsx
└── pages/
    ├── home/
    │   └── HomeStyle.jsx
    └── account/
        └── AccountStyle.jsx
```

### 동적 스타일링 예시

**위치**: `src/styles/components/card/ReservationCardStyle.jsx`

```javascript
export const CardContentFlex = styled.div`
  // 기본 스타일
  display: flex;
  padding: 10px;

  // props 기반 동적 스타일
  &.confirmed {
    background-color: #4caf50;  // 확정된 날짜는 초록색
    color: white;
  }

  &.cancle {
    background-color: #f44336;  // 취소는 빨간색
    text-decoration: line-through;
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: #ff6b6b;

  &.btn-save {
    background-color: #4caf50;  // 저장 버튼은 초록색
  }
`;
```

**사용 예시**: `src/components/card/ReservationCard.jsx:82-232`

```javascript
<CardContentFlex className={isFirstDateTimeConfirm ? "confirmed" : null}>
  {firstDate} {firstTime}
  {isFirstDateTimeConfirm && <CheckConfirm>✓</CheckConfirm>}
</CardContentFlex>
```

---

## 8️⃣ 가장 어려웠던 기술적 챌린지

### Challenge 1: 실시간 양방향 상태 동기화

**문제**:
- 관리자가 상태를 변경하면 사용자 화면에 즉시 반영되어야 함
- 사용자가 확정 버튼을 누르면 관리자 화면에도 즉시 반영되어야 함

**해결**:
```javascript
// Admin.jsx + Reservation.jsx 모두에서 onSnapshot 사용
onSnapshot(q, (snapshot) => {
  const docs = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setReservations(docs);  // 실시간 업데이트
});
```

### Challenge 2: react-hook-form과 Recoil 통합

**문제**:
- DatePicker는 Recoil로 관리 (다른 컴포넌트에서도 사용)
- Select는 react-hook-form으로 관리
- 제출 시 두 상태를 합쳐서 검증해야 함

**해결**:
```javascript
// 1. DatePicker를 Controller로 감싸기
<Controller
  render={({ field: { onChange } }) => (
    <DatePicker
      onChange={(date) => {
        setDateTime(prev => ({ ...prev, firstDate: dateString }));  // Recoil
        onChange(date);  // react-hook-form
      }}
    />
  )}
/>

// 2. 커스텀 검증 함수
const validateDateTimeSelection = (data) => {
  if (!getDateTime.firstDate || data.firstTime === "선택") {
    alert("1차 예약 날짜 또는 시간을 선택하지 않았습니다!");
    return false;
  }
  // 2차, 3차 검증...
  return true;
};
```

### Challenge 3: 예약 상태 전환 로직

**문제**:
- 1차/2차/3차 희망 날짜 중 어떤 것이 승인되었는지 추적
- 각 상태별로 다른 UI와 버튼 표시

**해결**:
```javascript
// 1. Boolean 플래그로 추적
const reservation = {
  isFirstDateTimeConfirm: false,
  isSecondDateTimeConfirm: true,   // 2차가 승인됨
  isThirdDateTimeConfirm: false,
  state: "확정 대기중",
  checkDateTime: "02월 21일 19:00"  // 승인된 날짜·시간
};

// 2. 조건부 렌더링
{state === "확정 대기중" && (
  <Button onClick={() => confirmReservation()}>
    {checkDateTime} 확정하기
  </Button>
)}
```

### Challenge 4: 로그인 없는 사용자 식별

**문제**:
- 로그인 시스템 없이 이름 + 전화번호로 사용자 식별
- 전체 users 컬렉션을 순회해야 함

**해결**:
```javascript
const users = await getDocs(query(collection(fireStore, "users")));
let isUser = false;

users.forEach((doc) => {
  if (doc.data().phoneNumber === inputData.phoneNumber
      && doc.data().username === inputData.username) {
    isUser = true;
    userId = doc.id;
  }
});
```

**개선 가능**:
- 전화번호를 document ID로 사용하면 `getDoc`으로 O(1) 조회 가능
- 복합 인덱스 생성으로 쿼리 최적화

### Challenge 5: SEO 최적화와 CSR의 한계

**문제**:
- React는 CSR(Client-Side Rendering) 방식으로, 검색 엔진 크롤러가 JavaScript를 실행하기 전에는 빈 HTML만 보임
- 기획자와 협업하여 SEO 키워드를 선정했지만, CSR 특성상 검색 엔진 최적화에 한계가 있었음
- 메타 태그, 타이틀, description을 설정해도 동적 콘텐츠는 크롤링되지 않음

**CSR의 한계**:
```html
<!-- 검색 엔진 크롤러가 보는 HTML (JavaScript 실행 전) -->
<html>
  <head>
    <title>오마타세 - 일본 음식점 예약 대행</title>
    <meta name="description" content="일본 여행 예약 대행 서비스" />
  </head>
  <body>
    <div id="root"></div>  <!-- 빈 컨테이너 -->
    <script src="/static/js/main.js"></script>
  </body>
</html>
```

**시도한 해결 방법**:
1. **react-helmet 사용**:
   - 페이지별 메타 태그 동적 관리
   - 하지만 여전히 JavaScript 실행 후에만 렌더링됨

2. **robots.txt, sitemap.xml 작성**:
   - 크롤러가 페이지를 찾을 수 있도록 사이트맵 제공
   - Netlify에 정적 파일로 배포

3. **Netlify의 Prerendering 기능 조사**:
   - Netlify의 유료 플랜에서 제공하는 프리렌더링 고려
   - 하지만 무료 플랜 사용으로 인해 적용 불가

**깨달은 점**:
- **CSR vs SSR의 trade-off 이해**: CSR은 빠른 개발과 사용자 인터랙션에 유리하지만, SEO에는 불리
- **SSR/SSG의 필요성**: Next.js 같은 프레임워크로 getServerSideProps나 getStaticProps를 사용하면 SEO 문제 해결 가능
- **실무적 의사결정**: 3주라는 짧은 개발 기간과 MVP(Minimum Viable Product) 목표를 고려하여, SEO보다 기능 구현을 우선시

**면접 답변 포인트**:
> "SEO 작업을 진행하면서 CSR의 한계를 직접 체감했습니다. react-helmet으로 메타 태그를 설정했지만, 검색 엔진 크롤러는 JavaScript 실행 전의 빈 HTML만 보기 때문에 효과가 제한적이었습니다.
>
> 이를 통해 SSR(Server-Side Rendering)이나 SSG(Static Site Generation)의 필요성을 이해했고, 만약 다시 개발한다면 Next.js를 사용하여 getStaticProps로 정적 페이지를 생성하거나, getServerSideProps로 서버 사이드 렌더링을 적용할 것입니다.
>
> 하지만 당시에는 3주라는 짧은 개발 기간과 MVP 목표를 고려하여, SEO보다 핵심 기능 구현을 우선시하는 실무적 의사결정을 내렸습니다."

**개선 방안** (면접 시 성장 가능성 어필):
1. **Next.js로 마이그레이션**:
   - getStaticProps로 홈페이지 SSG
   - getServerSideProps로 예약 조회 페이지 SSR

2. **React + Prerendering 서비스**:
   - Prerender.io, Rendertron 같은 서비스 활용
   - 크롤러 요청 시에만 프리렌더링된 HTML 제공

3. **Gatsby 사용**:
   - 정적 사이트 생성기로 빠른 로딩 속도
   - GraphQL로 Firestore 데이터 빌드 타임에 fetch

---

## 9️⃣ 예상 면접 질문과 답변

### Q1. 프로젝트를 간단히 소개해주세요.

**A**: "오마타세는 일본 여행 시 언어 장벽으로 인해 음식점 예약이 어려운 한국인을 위한 예약 대행 서비스입니다. React와 Firebase를 활용한 서버리스 풀스택 웹 애플리케이션으로, 사용자는 구글 맵 URL과 희망 날짜만 입력하면 관리자가 대신 전화 예약을 진행합니다. 실시간 상태 동기화를 통해 예약 진행 상황을 즉시 확인할 수 있으며, 예약 확정 후 일본어 예약 정보를 제공하여 체크인 시 활용할 수 있습니다."

### Q2. 왜 Recoil을 선택했나요? Redux와의 차이는?

**A**: "Recoil을 선택한 이유는 세 가지입니다. 첫째, React의 useState와 유사한 API로 학습 곡선이 낮았습니다. 둘째, atom 단위로 상태를 분리하여 불필요한 리렌더링을 줄일 수 있었습니다. 셋째, 비동기 처리를 위한 selector가 직관적이었습니다. Redux에 비해 보일러플레이트 코드가 적고, 특히 3주라는 짧은 개발 기간 내에 빠르게 구현할 수 있었습니다."

### Q3. Firebase를 사용한 이유는? 단점은 없나요?

**A**: "Firebase를 선택한 이유는 서버리스 아키텍처로 백엔드 인프라 설정 없이 빠르게 개발할 수 있었고, onSnapshot을 통한 실시간 데이터 동기화가 예약 시스템에 적합했기 때문입니다.

다만 단점도 있습니다. 첫째, 복잡한 쿼리가 어려워 전체 users 컬렉션을 순회해야 했습니다. 이는 전화번호를 document ID로 사용하거나 복합 인덱스를 생성하여 개선할 수 있습니다. 둘째, 비용이 사용량에 따라 증가하므로, 대규모 서비스에서는 비용 관리가 필요합니다."

### Q4. 가장 어려웠던 부분과 해결 방법은?

**A**: "가장 어려웠던 부분은 react-hook-form과 Recoil을 동시에 사용하는 것이었습니다. DatePicker는 전역 상태로 관리해야 했고, Select는 폼 검증이 필요했습니다.

해결을 위해 react-hook-form의 Controller로 DatePicker를 감싸고, onChange 콜백에서 Recoil 상태를 먼저 업데이트한 뒤 react-hook-form에도 값을 전달했습니다. 또한 커스텀 검증 함수를 만들어 제출 시 두 상태를 합쳐서 검증했습니다."

### Q5. 코드 구조를 어떻게 설계했나요?

**A**: "크게 세 가지 원칙으로 설계했습니다.

첫째, Presentational과 Container 컴포넌트를 분리했습니다. components/는 재사용 가능한 UI, pages/는 페이지 단위 로직을 담았습니다.

둘째, model 레이어를 분리하여 Firestore 로직을 캡슐화했습니다. user.js, reservation.js로 CRUD를 관리하여 컴포넌트에서 Firebase를 직접 호출하지 않았습니다.

셋째, styled-components를 컴포넌트별로 분리하여 styles/ 폴더에서 관리했습니다. 이를 통해 유지보수성과 재사용성을 높였습니다."

### Q6. 실시간 동기화는 어떻게 구현했나요?

**A**: "Firestore의 onSnapshot을 활용했습니다. 관리자와 사용자 페이지 모두에서 reservations 컬렉션을 감지하여, 한쪽에서 데이터를 변경하면 다른 쪽에 즉시 반영됩니다.

예를 들어 관리자가 '확정 대기중'으로 상태를 변경하면, 사용자 화면에 즉시 확정 버튼이 나타납니다. 또한 useEffect와 함께 사용하여 컴포넌트 언마운트 시 리스너를 해제하여 메모리 누수를 방지했습니다."

### Q7. 성능 최적화는 어떻게 했나요?

**A**: "첫째, Recoil의 atom을 사용자(userAtom), 예약(reservationAtom), 날짜(dateAtom)로 분리하여 불필요한 리렌더링을 줄였습니다.

둘째, Firestore 쿼리에 orderBy와 인덱스를 사용하여 정렬 성능을 향상시켰습니다.

셋째, styled-components로 스타일을 캡슐화하여 CSS 충돌을 방지했습니다.

다만 개선할 부분도 있습니다. React.memo나 useMemo를 활용하지 못했고, 전체 users 순회는 복합 인덱스로 개선 가능합니다."

### Q8. 협업 경험은 어땠나요?

**A**: "기획자(PO)와 협업하면서 요구사항을 명확히 정의하는 것이 중요함을 배웠습니다. 특히 캘린더 디자인에서 사용자 경험을 고려한 커스터마이징 요청이 있었고, 이를 구현하면서 의사소통의 중요성을 체감했습니다.

또한 SEO 적용을 위해 기획자와 함께 키워드를 선정하고, meta 태그를 작성하면서 마케팅 관점도 배울 수 있었습니다."

### Q9. 프로젝트에서 개선하고 싶은 부분은?

**A**: "세 가지를 개선하고 싶습니다.

첫째, 테스트 코드를 작성하지 못했습니다. Jest와 React Testing Library로 단위 테스트와 통합 테스트를 추가하고 싶습니다.

둘째, 전화번호를 document ID로 사용하여 O(n) 조회를 O(1)로 개선하고 싶습니다.

셋째, TypeScript를 도입하여 타입 안정성을 높이고 싶습니다. 특히 Firestore 문서 스키마를 인터페이스로 정의하면 런타임 에러를 방지할 수 있을 것 같습니다."

### Q10. 이 프로젝트에서 배운 점은?

**A**: "세 가지를 배웠습니다.

첫째, 실시간 동기화의 중요성입니다. onSnapshot을 활용하여 사용자 경험을 크게 향상시킬 수 있었습니다.

둘째, 상태 관리의 복잡성입니다. react-hook-form과 Recoil을 통합하면서 각 라이브러리의 장단점을 이해했습니다.

셋째, 코드 구조의 중요성입니다. model 레이어 분리와 스타일 컴포넌트 분리로 유지보수성을 크게 향상시켰습니다."

### Q11. SEO는 어떻게 처리했나요? CSR의 한계는 없었나요?

**A**: "SEO 작업을 진행하면서 CSR(Client-Side Rendering)의 한계를 직접 체감했습니다.

React는 JavaScript가 실행된 후에야 콘텐츠가 렌더링되기 때문에, 검색 엔진 크롤러는 빈 HTML만 보게 됩니다. 기획자와 협업하여 '일본 음식점 예약', '일본 여행 예약 대행' 같은 키워드를 선정하고 react-helmet으로 메타 태그를 설정했지만, JavaScript 실행 전의 HTML에는 반영되지 않아 효과가 제한적이었습니다.

이를 해결하기 위해 robots.txt와 sitemap.xml을 작성하여 크롤러가 페이지를 찾을 수 있도록 했고, Netlify의 Prerendering 기능도 조사했지만 유료 플랜이 필요했습니다.

이 경험을 통해 SSR(Server-Side Rendering)과 SSG(Static Site Generation)의 필요성을 이해했습니다. 만약 다시 개발한다면 Next.js를 사용하여 getStaticProps로 홈페이지를 정적 생성하거나, getServerSideProps로 예약 조회 페이지를 서버 사이드 렌더링할 것입니다.

하지만 당시에는 3주라는 짧은 개발 기간과 MVP 목표를 고려하여, SEO보다 핵심 기능 구현을 우선시하는 실무적 의사결정을 내렸습니다. 이를 통해 기술 선택 시 trade-off를 고려하는 법을 배웠습니다."

---

## 🔟 "핵심 기능을 설명해주세요" 질문 대응

### 📌 답변 구조 (3분 이내)

**1단계: 서비스 핵심 가치 설명 (30초)**
> "오마타세의 핵심 기능은 '실시간 양방향 예약 상태 동기화'입니다. 사용자가 희망 날짜를 제출하면, 관리자가 음식점에 전화 확인 후 가능한 날짜를 승인하고, 사용자가 최종 확정하는 3단계 프로세스를 실시간으로 동기화합니다."

**2단계: 기능별 플로우 설명 (1분 30초)**

#### 기능 1: 예약 생성 및 검증
**위치**: `src/components/form/Form.jsx:78-152`

```
사용자 입력:
  ├─ 구글 맵 URL (필수)
  ├─ 성인/어린이 수 (필수)
  └─ 1차/2차/3차 희망 날짜·시간
       ├─ 1차: 필수
       └─ 2차/3차: 선택 (단, 날짜와 시간 둘 다 선택되어야 함)

검증 로직 (validateDateTimeSelection):
  ├─ 1차 날짜 또는 시간 미선택 시 → alert
  └─ 2차/3차 날짜만 선택하고 시간 미선택 시 → alert

제출 후:
  ├─ 기존 유저: accountUser 호출 → 유료 예약 생성
  └─ 신규 유저: /account로 이동 → User 생성 후 무료 예약
```

**면접 시 강조 포인트**:
- "react-hook-form과 Recoil을 통합하여 폼 검증을 구현했습니다"
- "1차는 필수지만 2차/3차는 선택 사항이므로, 날짜와 시간이 쌍으로 입력되었는지 검증하는 커스텀 함수를 작성했습니다"

---

#### 기능 2: 실시간 예약 조회
**위치**: `src/pages/reservation/Reservation.jsx:21-45`

```javascript
useEffect(() => {
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

  return () => unsubscribe();  // 메모리 누수 방지
}, [getUserId]);
```

**플로우**:
```
1. 사용자가 이름 + 전화번호 입력
2. where("userId", "==", getUserId)로 본인 예약만 조회
3. onSnapshot으로 실시간 업데이트 감지
4. 예약 상태 변경 시 즉시 화면 업데이트
```

**면접 시 강조 포인트**:
- "Firebase onSnapshot으로 실시간 리스너를 설정했습니다"
- "useEffect의 클린업 함수에서 unsubscribe()를 호출하여 메모리 누수를 방지했습니다"
- "관리자가 상태를 변경하면 사용자 화면에 즉시 반영됩니다"

---

#### 기능 3: 예약 상태 전환 (4단계)
**위치**: `src/pages/admin/Admin.jsx:72-99`

```
[상태 전환 플로우]

1. 예약 요청중 (사용자 제출 직후)
   ├─ 사용자: 1차/2차/3차 희망 날짜 모두 표시
   └─ 관리자: 음식점에 전화 확인

2. 확정 대기중 (관리자가 1/2/3차 중 하나 승인)
   ├─ 관리자 동작:
   │   ├─ "1차 예약 가능" 버튼 클릭
   │   └─ updateDoc({ isFirstDateTimeConfirm: true, state: "확정 대기중" })
   ├─ 사용자 화면:
   │   ├─ 승인된 날짜에 ✓ 체크마크
   │   └─ "02월 20일 18:00 확정하기" 버튼 활성화

3. 예약 확정 (사용자가 최종 승인)
   ├─ 사용자: 확정 버튼 클릭
   ├─ updateDoc({ state: "예약 확정", responseDateTime: "..." })
   └─ "일본어 보여주기" 버튼 활성화

4. 예약 불가/자동 취소
   ├─ 관리자: 불가 사유 작성 후 저장
   └─ 사용자: 취소 사유 표시
```

**코드 예시** (Admin.jsx):
```javascript
const onReservationStateControl = async (id, checkReservation, dateTime) => {
  const reservationRef = doc(fireStore, "reservations", id);

  if (checkReservation === "1차") {
    await updateDoc(reservationRef, {
      isFirstDateTimeConfirm: true,
      checkDateTime: dateTime,
      state: "확정 대기중",
    });
  }
  // 2차, 3차도 동일한 방식
};
```

**면접 시 강조 포인트**:
- "상태 관리를 위해 state 필드와 isFirstDateTimeConfirm 등의 Boolean 플래그를 함께 사용했습니다"
- "어떤 희망 날짜가 승인되었는지 추적하기 위해 3개의 플래그를 설계했습니다"
- "사용자와 관리자 양쪽에서 상태를 변경할 수 있어, onSnapshot으로 실시간 동기화했습니다"

---

#### 기능 4: 예약 확정 및 일본어 정보 제공
**위치**: `src/pages/reservation/confirm/ReservationConfirm.jsx:77-127`

```javascript
// 승인된 날짜만 표시
{isFirstDateTimeConfirm && (
  <CardContentFlex className="confirmed">
    <CardContentText>{firstDate}</CardContentText>
    <CardContentText>{firstTime}</CardContentText>
    <CheckConfirm>✓</CheckConfirm>
  </CardContentFlex>
)}

// 확정 버튼
<Button onClick={async () => {
  await updateDoc(reservationRef, {
    state: "예약 확정",
    responseDateTime: "02월 20일 | 14:30:00"
  });
  navigate("final");
}}>
  {checkDateTime} 확정하기
</Button>
```

**플로우**:
```
1. 확정 대기중 상태에서 확정 버튼 클릭
2. Firestore에 state: "예약 확정" 업데이트
3. 예약 확정 완료 페이지로 이동
4. "일본어 보여주기" 버튼 활성화
5. 일본어 예약자명, 날짜, 시간 표시 (체크인용)
```

**면접 시 강조 포인트**:
- "예약 확정 후 일본어 예약 정보를 제공하여 현지에서 바로 사용할 수 있습니다"
- "responseDateTime 필드로 사용자가 언제 확정했는지 기록했습니다"

---

**3단계: 기술적 난이도 강조 (1분)**

#### 🔥 어려웠던 점 1: 상태 동기화
```
문제: 관리자와 사용자가 동시에 접속 중일 때, 상태 변경이 즉시 반영되어야 함

해결:
  ├─ Admin.jsx: onSnapshot으로 전체 예약 실시간 감지
  ├─ Reservation.jsx: onSnapshot으로 본인 예약 실시간 감지
  └─ 양쪽 모두 동일한 Firestore 문서를 감지하여 즉시 동기화
```

#### 🔥 어려웠던 점 2: 복잡한 폼 검증
```
문제: 1차는 필수, 2차/3차는 선택인데 날짜와 시간이 쌍으로 입력되어야 함

해결:
  ├─ DatePicker: Recoil로 관리 (전역 상태)
  ├─ Select: react-hook-form으로 관리 (폼 검증)
  └─ validateDateTimeSelection으로 두 상태를 합쳐서 검증
```

#### 🔥 어려웠던 점 3: 1차/2차/3차 추적
```
문제: 관리자가 1/2/3차 중 어떤 날짜를 승인했는지 명확히 추적

해결:
  ├─ isFirstDateTimeConfirm: Boolean
  ├─ isSecondDateTimeConfirm: Boolean
  ├─ isThirdDateTimeConfirm: Boolean
  └─ checkDateTime: 승인된 날짜·시간 문자열 (예: "02월 20일 18:00")
```

#### 🔥 어려웠던 점 4: SEO와 CSR의 한계
```
문제: CSR 방식으로 인해 검색 엔진 크롤러가 콘텐츠를 제대로 인식하지 못함

시도:
  ├─ react-helmet으로 메타 태그 설정
  ├─ robots.txt, sitemap.xml 작성
  └─ Netlify Prerendering 조사 (유료 플랜 필요)

깨달은 점:
  ├─ CSR vs SSR의 trade-off 이해
  ├─ Next.js의 SSR/SSG 필요성 인식
  └─ MVP 목표 고려한 실무적 의사결정
```

---

### 🎯 시연 시나리오 (실제 화면 보여주기)

**Step 1: 예약 생성**
```
1. https://omatase.netlify.app/ 접속
2. "예약하기" 버튼 클릭
3. 구글 맵 URL, 인원 수, 1차 날짜·시간 입력
4. 제출 → "예약 요청중" 상태
```

**Step 2: 관리자 승인 (가상 시연)**
```
1. 관리자 페이지 접속
2. 예약 목록에서 방금 생성한 예약 확인
3. "1차 예약 가능" 버튼 클릭
4. 사용자 화면에 즉시 "확정하기" 버튼 표시
```

**Step 3: 사용자 확정**
```
1. 사용자: "02월 20일 18:00 확정하기" 버튼 클릭
2. 예약 확정 완료
3. "일본어 보여주기" 버튼 클릭
4. 일본어 예약자명, 날짜, 시간 확인
```

---

### 📝 답변 스크립트 (완성본)

> **면접관**: "이 프로젝트의 핵심 기능을 설명해주세요."

**답변**:
"네, 오마타세의 핵심 기능은 **실시간 양방향 예약 상태 동기화**입니다.

먼저 사용자가 구글 맵 음식점 URL과 희망 날짜 3개를 입력하면, react-hook-form과 Recoil을 통합한 폼 검증 시스템이 작동합니다. 1차 날짜는 필수이고, 2차와 3차는 선택이지만 날짜와 시간이 쌍으로 입력되어야 하는 복잡한 검증 로직을 구현했습니다.

제출 후 예약은 '예약 요청중' 상태가 되고, 관리자가 Firebase onSnapshot으로 실시간 감지합니다. 관리자가 음식점에 전화 확인 후 1차/2차/3차 중 하나를 승인하면, Firestore의 isFirstDateTimeConfirm 같은 Boolean 플래그가 true로 변경되고, 사용자 화면에 즉시 확정 버튼이 나타납니다.

사용자가 확정 버튼을 클릭하면 state가 '예약 확정'으로 변경되고, 일본어 예약자명과 날짜·시간이 표시됩니다. 이 정보는 현지 체크인 시 바로 사용할 수 있습니다.

가장 어려웠던 부분은 세 가지였습니다.

첫째, react-hook-form과 Recoil을 동시에 사용하는 것이었습니다. DatePicker는 전역 상태로 관리해야 했고, Select는 폼 검증이 필요했기 때문에, Controller로 DatePicker를 감싸고 onChange 콜백에서 두 라이브러리의 상태를 모두 업데이트하는 방식으로 해결했습니다.

둘째, 관리자와 사용자가 동시에 접속 중일 때 상태 변경이 즉시 반영되어야 했는데, onSnapshot의 실시간 리스너를 양쪽 모두에 설정하고, useEffect 클린업 함수에서 구독을 해제하여 메모리 누수를 방지했습니다.

셋째, SEO 작업에서 CSR의 한계를 체감했습니다. React는 JavaScript 실행 후에 콘텐츠가 렌더링되기 때문에, 검색 엔진 크롤러는 빈 HTML만 인식합니다. react-helmet과 sitemap.xml로 대응했지만 효과가 제한적이었고, 이를 통해 Next.js 같은 SSR/SSG 프레임워크의 필요성을 이해하게 되었습니다."

---

## 1️⃣1️⃣ 면접 팁

### 시연 준비
1. **배포 URL**: https://omatase.netlify.app/ 실행 가능 확인
2. **주요 플로우 시연**:
   - 예약 생성 → 관리자 승인 → 사용자 확정
   - 일본어 예약 정보 확인
3. **코드 하이라이트**:
   - `src/pages/admin/Admin.jsx:32-47` (onSnapshot)
   - `src/components/calender/Calender.jsx:49-102` (react-hook-form + Recoil)
   - `src/model/user.js:22-120` (첫 유저 vs 재방문 유저)

### 강조할 포인트
1. **문제 해결 능력**: 언어 장벽 문제를 기술로 해결
2. **풀스택 역량**: React + Firebase 전체 개발
3. **실시간 시스템**: onSnapshot을 활용한 양방향 동기화
4. **코드 품질**: 컴포넌트/모델/스타일 분리
5. **협업 경험**: 기획자와 협업, SEO 적용

### 주의사항
- 기술 스택을 나열하지 말고, **왜 선택했는지** 설명
- 어려웠던 점을 **구체적인 코드 예시**와 함께 설명
- 개선 가능한 부분도 솔직하게 언급 (성장 가능성 어필)
- "이 부분은 기억이 안 납니다"보다 "이렇게 구현했을 것 같습니다" (추론 능력 어필)

---

## 📂 주요 파일 경로 (빠른 참조)

```
/src/pages/admin/Admin.jsx              # 실시간 동기화 (32-47번 줄)
/src/components/calender/Calender.jsx   # react-hook-form + Recoil (49-102번 줄)
/src/model/user.js                      # 첫 유저 분기 (22-120번 줄)
/src/components/form/Form.jsx           # 폼 검증 (78-103번 줄)
/src/components/card/ReservationCard.jsx # 상태별 UI (82-232번 줄)
/src/recoil/user/user.js                # userAtom
/src/recoil/reservation/reservation.js  # reservationAtom
/src/recoil/date/date.js                # dateAtom
```

---

**면접 화이팅! 자신감 있게 설명하세요! 🚀**
