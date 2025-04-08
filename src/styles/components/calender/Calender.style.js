import styled from "styled-components";

// 선택된 날짜의 배경색을 var(--color-primary)로 설정하고, 글자 색을 흰색으로 바꿔주기.

export const CalenderWrapper = styled.div`
  .react-datepicker__header,
  .react-datepicker__day-name,
  .react-datepicker__current-month,
  .react-datepicker__day--selected {
    color: white;
    background-color: var(--color-primary);
  }

  /* .react-datepicker__navigation-icon {
    color: white;
  } */
`;

// 날짜 입력에 대한 라벨을 커스텀 스타일. date-label 클래스를 사용하여 날짜 라벨을 꾸며준다.
export const Label = styled.label`
  font-size: var(--font-size-3);
  font-weight: 600;
  span {
    font-size: var(--font-size-2);
    font-weight: normal;
  }
  .highlight-red {
    color: var(--color-alert-red);
  }
  &.date-label {
    margin-bottom: 0.62rem;
  }
`;
