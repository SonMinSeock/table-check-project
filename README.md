# 오마타세 - 일본 음식점 예약 대행 웹 서비스

- 배포 URL : [https://omatase.netlify.app/](https://omatase.netlify.app/)
- 유튜브 홍보 영상 : [오마타세](https://www.youtube.com/shorts/tY2PLKhwh8g)

## 목차

- [프로젝트 소개](#프로젝트-소개)
- [프로젝트 배경](#프로젝트-배경)
- [프로젝트 기간](#프로젝트-기간)
- [팀원 구성](#팀원-구성)
- [개발 환경](#개발-환경)
- [프로젝트 흐름도](#프로젝트-흐름도)
- [채택한 개발 기술](#채택한-개발-기술)
- [화면 구성](#화면-구성)
- [주요 기능](#주요-기능)
- [배운점](#배운점)

## 프로젝트 소개

- 일본 여행을 계획 중인 한국 고객들이 일본의 인기 음식점을 예약하는 과정을 간소화하고 편리하게 해줍니다.
- 이 서비스를 통해 한국 고객들은 언어 장벽을 뛰어넘고 예약 대행 서비스의 도움을 받아 원하는 일본 음식점에서 예약 할 수 있습니다.
- 오마타세 웹사이트 이용해 일본 음식 문화를 쉽게 경험해보세요!

## 프로젝트 배경

우리는 "테이블체크" 웹사이트를 보고 영감을 받아, 외국인 관광객들을 위한 일본 음식점 예약 서비스를 개발하게 되었습니다. 외국인이 일본어를 유창하게 구사하지 못하거나 예약 방식을 이해하기 어려운 문제를 해결하기 위해 시작되었습니다. 전화 예약이 일반적인 상황에서, 온라인 예약의 부재와 문화적인 장벽을 극복하여 고객들의 여행 경험을 향상시키고자 합니다.

## 프로젝트 기간

1차 개발 : 2024.02.05 ~ 2024.02.25

## 팀원 구성

|                                                                         **손민석**                                                                          |                                                                                       **전민서**                                                                                        |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="140" height="140" src="https://avatars.githubusercontent.com/u/44064257?s=400&u=c0f84c43a6aaa80ecc32bf82f47e893e26400fbf&v=4" /><br/>프론트엔드 | <img width="140" height="140" alt="스크린샷 2023-09-13 오후 3 20 10" src="https://github.com/SonMinSeock/spark_v2/assets/44064257/9e6476fb-a5b0-4bfe-bea9-8c9219218f68"><br/>PO |

## 개발 환경

- FrontEnd : React, JavaScript, styled-components, Recoil
  <div>    
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
    <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
    <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=Recoil&logoColor=white"/>
  </div>
- BackEnd : Firebase
  <div>
    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black"/>
  </div>
- 배포 플랫폼 : Netlify
  <div>
    <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=white"/>
  </div>
- 버전 및 이슈관리 : Github
  <div>
    <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>
  </div>
- 협업 툴 : [Notion](https://toothsome-raft-e05.notion.site/f8d7c49e99254b0d83f79c1167634020?pvs=4)
  <div>
    <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/>
  </div>
- 디자인 : <a href="https://www.figma.com/file/TS2eplJvxi9Bp46TShxlGh/%E3%81%8A%E3%81%BE%E3%81%9F%E3%81%9B?type=design&node-id=28%3A2212&mode=design&t=LZiMjm3qxbNMiXTK-1" target="_blank">Figma</a>
  <div>
    <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/>
  </div>

## 프로젝트 흐름도

- 사용자 흐름도
  <img width="1292" alt="오마타세-사용자-흐름도" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/25773072-74c6-4922-b144-f5f706315c6a">

- 관리자 흐름도
  <img width="1023" alt="오마타세-관리자-흐름도" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/4e66336e-4a14-48f5-ac64-d3f3bc5dfd34">
- <a href="https://www.figma.com/file/uxtXCgYMHPQKLctfWR548s/%EC%98%A4%EB%A7%88%ED%83%80%EC%84%B8---%EC%9D%BC%EB%B3%B8-%EC%9D%8C%EC%8B%9D%EC%A0%90-%EC%98%88%EC%95%BD-%EB%8C%80%ED%96%89-%EC%9B%B9-%EC%84%9C%EB%B9%84%EC%8A%A4-%ED%9D%90%EB%A6%84%EB%8F%84?type=whiteboard&node-id=3%3A2406&t=Ry1kUu8GCDWyeYWO-1">프로젝트 흐름도 링크</a>

## 채택한 개발 기술

### [React]

- 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려하기 위해 React를 채택하여 개발했습니다.
- 컴포넌트화를 통해 리소스 절약의 효과 가능합니다.

### [styled-components]

- React를 이용하여 컴포넌트 적용하여 스타일링 유지 보수 가능합니다.
- props를 이용하여 조건부 스타일링을 활용해 상황에 알맞은 스타일을 적용가능 하므로 채택했습니다.
- 네이밍을 통해 일반 컴포넌트와 스타일 컴포넌트를 구분하기 쉽습니다.

### [Recoil]

- Recoil은 React의 컴포넌트 상태를 관리하는 것과 유사한 API를 제공하여 간편하게 채택할 수 있었습니다.
- React 프로젝트에서 전역 상태를 관리하면 코드 가독성 높아집니다.
- DevTools 지원하기 때문에 애플리케이션의 상태를 쉽게 관리 할 수 있습니다.

### [react-datepicker]

- 커스텀 디자인을 쉽게 구현할 수 있는 장점으로 인해, react-datepicker를 채택하였습니다.
- 달력 형식의 UI를 제공하여 간편하게 원하는 날짜를 선택할 수 있습니다.
- 패키지 디자인 가이드에 맞춰 날짜 선택기를 스타일링할 수 있어서 UI 일관성을 유지하는 데 도움이 되었습니다.

### [Firebase]

- Firebase는 실시간 데이터베이스를 제공하며, 실시간 데이터 동기화를 쉽게 구현할 수 있습니다.
- Firebase는 백엔드 서버를 설정하고 관리하는 복잡한 과정을 간소화합니다.
- Firebase가 서버리스 기능을 제공하여 서버 관리와 관련된 부담을 줄일 수 있기 때문입니다.

### [브랜치 전략]

- 레포지토리를 관리하기 위해 'master', 'develop', 그리고 '기능 브랜치(Feat)'로 구분하여 사용했습니다."
- master 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
- develop 브랜치는 개발 중인 코드의 최신 버전을 포함하는 브랜치로 사용됩니다.
- Feat 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용합니다.

## 화면 구성

|                                                         **첫 예약**                                                         |                                                            **예약 내역 확인**                                                            |                                                              **두 번째 예약**                                                              |                                                    **예약 요청에서 예약 확정 대기 상태 조작 - 관리자**                                                     |
| :-------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![오마타세-첫예약](https://github.com/SonMinSeock/ikw-market/assets/44064257/4b9d6f8b-4e85-41e7-8655-0e2fae6c0582) | ![오마타세-예약확인](https://github.com/SonMinSeock/table-check-project/assets/44064257/aa525526-f3f9-4793-81d4-1caf1c7805d3) | ![오마타세-두번째예약](https://github.com/SonMinSeock/table-check-project/assets/44064257/ea27012d-a72c-4b6c-a570-d5a0daf9a871) | ![관리자-예약확정대기상태조작](https://github.com/SonMinSeock/table-check-project/assets/44064257/601b4039-cb4c-4aa7-8e31-8d610d9f3788) |

|                                          **예약 확정 대기 상태에서 예약 확정 조작 - 사용자**                                           |                                                   **예약 불가 상태 조작 - 관리자**                                                    |                                                       **예약 불가 상태 확인 - 사용자**                                                        |                                                      **예약자 일본어 작성 - 관리자**                                                       |                                                     **예약자 일본어 확인 - 사용자**                                                     |
| :------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: |
| ![사용자-예약확정](https://github.com/SonMinSeock/table-check-project/assets/44064257/f1901f6f-3e5f-490b-824b-d0cd795c0db2) | ![관리자-예약불가](https://github.com/SonMinSeock/table-check-project/assets/44064257/3c2d1cfa-405f-4c5c-b715-ab20418809f5) | ![사용자-예약불가확인](https://github.com/SonMinSeock/table-check-project/assets/44064257/f7cb471e-ab65-405c-aafd-3bddbf7e7cb9) | ![관리자-일본어작성](https://github.com/SonMinSeock/table-check-project/assets/44064257/8c457923-e794-431e-b818-72ed781963c2) | ![고객-일본어확인](https://github.com/SonMinSeock/table-check-project/assets/44064257/d85597d8-cd50-4402-b38b-9c20a0dd5686) |

## 주요 기능

### [일본 음식점 예약 기능]

- 사용자는 일본 음식점의 URL, 성인 및 어린이 수, 예약 날짜와 시간 작성 가능합니다.
- 1차 예약은 필수이며 선택적으로 2차와 3차 예약 시간을 추가로 입력하여 예약할 수 있습니다.

  <img width="382" alt="사용자-예약기능" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/8cf23ee4-ccf4-47c5-842a-640d1eb1197b">

- 관리자는 사용자가 입력한 정보를 기반으로 예약을 대행할 수 있습니다.

  <img width="388" alt="관리자-예약내역" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/3af1c728-9223-48f6-bc64-d7ee0936fe8c">

### [성인 및 어린이 인원 수 선택]

- 사용자는 예약할 때 성인과 어린이의 인원 수를 선택할 수 있습니다.

  <img width="368" alt="성인-인원수-선택" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/eee822c0-1af9-4ba6-b1dc-a0175f67c048">

- 이를 통해 음식점에 대한 예약 정보를 정확하게 전달할 수 있습니다.

### [날짜 및 시간 선택 기능]

- 사용자는 캘린더 선택하여 원하는 날짜를 예약할 수 있습니다.

  <img width="362" alt="날짜선택" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/c49ff335-4bcc-4237-9023-80fb3a2568b0">

- 사용자는 시간 선택창에서 원하는 시간대에 예약할 수 있습니다.

  <img width="352" alt="시간선택" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/be8c55c9-d987-4c8d-a214-6dfe76fb7427">

### [예약 상태 관리]

- 예약은 총 네 가지 상태로 관리됩니다: '예약 요청 중', '확정 대기 중', '예약 확정', 그리고 '예약 불가' 상태입니다.
  <div>
    <div>
      <img width="352" alt="예약요청중" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/a3dfc7b8-6ee2-49b5-9641-79e11b333957">
      <img width="347" alt="확정 대기중" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/7628044d-8a2c-4f83-b301-f9fb5a0fa0ba">
    </div>
    <div>
      <img width="350" alt="예약확정상태" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/b806fcda-79a9-4d76-a4e9-c4152c59d352">
      <img width="379" alt="예약불가상태" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/d716c070-4fc0-4b7a-849d-b84a5917e119">
    </div>
  </div>

- 관리자는 이러한 예약 상태를 관리하고 사용자에게 적절한 상태를 할당할 수 있습니다.

  - 세 번째 예약을 2차 날짜/시간대에 확정 가능하다고 판단될 경우, 해당 예약은 확정 대기 상태로 변경될 수 있습니다.

    <img width="361" alt="예약확정대기중" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/aa72b163-d10c-4feb-bb44-a6aa8bf727fd">

  - 사용자가 3차 날짜/시간대에 예약을 확정할 수 있다면, 사용자가 확정하고 관리자가 예약을 확인한 후, 사용자에게 확정되었다는 메시지를 보내줍니다.

    - 관리자 페이지.

      <img width="300" alt="관리자에서예약확정" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/6ace0eec-db26-4d4d-a550-f784952c0ea1">

    - 사용자 예약내역 페이지.

      <img width="300" alt="예약확정" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/1b5ce5b7-c090-419a-84bb-18f3cb90e36f">

- Firebase를 통해 예약 정보가 동기화됩니다. 관리자는 Firebase에서 예약 정보를 확인하고 상태를 업데이트할 수 있습니다.
- 관리자는 Firebase에서 예약 정보를 확인하고 사용자에게 대신하여 예약을 진행할 수 있습니다.

### [예약 조회]

- 사용자는 전화번호를 기반으로 자신의 예약 내역을 조회할 수 있습니다.

  <img width="300" alt="전화번호 기반으로 예약 내역 조회" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/9a461636-4230-4660-b9c6-b25251abcab0">

- 조회된 예약 내역에는 예약 상태, 날짜 및 시간, 성인, 어린이 수, 음식점 URL등 정보가 포함됩니다.

  <img width="300" alt="스크린샷 2024-03-18 오후 12 20 46" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/f73a387e-58ac-403e-b48c-db45e1f8373f">

### [일본어 이름으로 예약 정보 표시]

- 관리자 페이지에서 해당 예약에 고객의 일본어 이름을 작성할 수 있습니다. 이후 관리자가 작성한 일본어 이름을 통해 고객이 체크인할 수 있습니다.

  <img width="352" alt="관리자-일본어작성" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/a5abc051-6431-4890-9b71-e53bb649acea">

- 음식점은 예약한 사용자의 이름을 일본어로 표시하여 체크인이 가능하도록 합니다.

  - 확정된 예약은 '일본어 보여주기' 버튼을 통해 예약자를 일본어 페이지로 이동시켜줍니다.

    <img width="300" alt="3차 예약 예약자 일본어 버튼" src="https://github.com/SonMinSeock/table-check-project/assets/44064257/2196ede9-723b-4ac2-9f2e-1ab79a8e4a06">

  - 예약자 일본어 페이지에서는 예약자의 이름, 날짜, 시간을 일본어로 표시합니다.

    <img width="373" alt="예약자 일본어 페이지" src="https://github.com/user-attachments/assets/7c266efc-47fc-4962-b6e9-408b6d5477ff" />

- 이를 통해 음식점은 사용자의 예약을 신속하게 확인하고 서비스를 제공할 수 있습니다.

## 배운점

1. 협업의 중요성 이해

- 캘린더 디자인 협업을 통해 의사소통과 합의에 대한 중요성을 깨달았습니다.
- 팀원들과의 의견 공유를 통해 합의를 이끌어내고, react-datepicker 패키지를 활용하여 프로젝트에 맞는 디자인을 구현했습니다.
- 문서와 예제를 활용하여 빠르게 학습하고 효율적으로 작업할 수 있었습니다.

2. 기획자와의 협업을 통한 SEO 적용

- 기획자와의 협업을 통해 SEO를 적용한 프로젝트를 통해 많은 것을 배우고 성장할 수 있는 기회를 가졌습니다.
- 기획자와의 의논을 통해 특정 키워드를 추가하고 사용자 요구에 따른 키워드 선정은 SEO 적용의 기반이 되었습니다.
- 처음으로 SEO를 적용하면서 학습의 과정을 거치고 신기함을 느낄 수 있었습니다.

3. 지속적인 학습의 필요성

- 라이브러리 문서를 보는 방법과 실습을 통한 경험을 통해 더 많은 것을 배우고 익혀야 함을 느꼈습니다.
- 검색 엔진 최적화의 원리와 방법을 익히는 과정에서 더 많은 학습의 필요성을 느꼈습니다.
