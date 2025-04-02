import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef, useRef } from "react";
import { ko } from "date-fns/locale";
import { IoIosArrowDown } from "react-icons/io";
import { Controller } from "react-hook-form";
import { dateAtom } from "../../recoil/date/date";
import { useSetRecoilState } from "recoil";

// 선택된 날짜의 배경색을 var(--color-primary)로 설정하고, 글자 색을 흰색으로 바꿔주기.
const CalenderWrapper = styled.div`
  .react-datepicker__header,
  .react-datepicker__day--selected {
    background-color: var(--color-primary);
  }
  .react-datepicker__day-name,
  .react-datepicker__current-month,
  .react-datepicker__day--selected {
    color: white;
  }

  /* .react-datepicker__navigation-icon {
    color: white;
  } */
`;

// 날짜 입력에 대한 라벨을 커스텀 스타일. date-label 클래스를 사용하여 날짜 라벨을 꾸며준다.
const Label = styled.label`
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

// useForm에서 관리하는 폼 데이터에 자동으로 반영. 그러므로 날짜 선택 후, control을 통해 해당 값을 폼 데이터로 처리할 수 있게 된다.
function Calender({ index, control }) {
  // 선택된 날짜를 dateAtom에 저장하기 위해 사용된다.
  const setDateTime = useSetRecoilState(dateAtom);

  const calendar = useRef(null);

  const setRegisterName = () => {
    if (index === 0) {
      return "firstDate";
    } else if (index === 1) {
      return "secondDate";
    } else if (index === 2) {
      return "thirdDate";
    }
  };

  // onClick을 통해 DatePicker가 열리도록 하고, 날짜를 선택하면 이 값이 onChange를 통해 부모 컴포넌트로 전달된다.
  const CustomDatePickerInput = forwardRef(({ value, onClick, type = "date" }, ref) => {
    let format = value;

    // 날짜를 선택하면 선택한 날짜가 "MM월 dd일" 형식으로 표시되도록 설정한다.
    if (type === "date") {
      format = value.split(" ")[1] + " " + value.split(" ")[2]; // "MM월 dd일" 형식으로 표시되도록 설정
    }

    return (
      <div className="datapicker-container" onClick={onClick} ref={ref}>
        <span>{!value ? "선택" : format}</span>
        <IoIosArrowDown />
      </div>
    );
  });
  return (
    <CalenderWrapper>
      <Label className="date-label" htmlFor="date1">
        날짜{index === 0 ? <span className="highlight-red">(필수)</span> : <span>({index + 1}순위)</span>}
      </Label>
      <Controller
        name={setRegisterName()}
        control={control}
        rules={index === 0 ? { required: true } : { required: false }}
        render={({ field: { value, onChange } }) => (
          <DatePicker
            ref={calendar}
            locale={ko}
            // selected={selectedDates[index]}
            // onChange={(date) => handleDateChange(date, index)}
            // onChange={field.onChange}
            // placeholderText="yyyy-MM-dd"
            selected={value}
            onChange={(date) => {
              const month = String(date.getMonth() + 1).padStart(2, "0");
              const day = String(date.getDate()).padStart(2, "0");

              const dateString = `${month}월 ${day}일`;
              if (index === 0) {
                setDateTime((prev) => ({
                  ...prev,
                  firstDate: dateString,
                }));
              } else if (index === 1) {
                setDateTime((prev) => ({
                  ...prev,
                  secondDate: dateString,
                }));
              } else if (index === 2) {
                setDateTime((prev) => ({
                  ...prev,
                  thirdDate: dateString,
                }));
              }
              onChange(date);
            }}
            dateFormat="yyyy년 MM월 dd일" // "yyyy년 MM월 dd일" 형식
            popperPlacement="auto"
            withPortal
            minDate={new Date()}
            onFocus={(e) => e.target.blur()}
            customInput={<CustomDatePickerInput />}
            onCalendarOpen={() => {
              document.addEventListener(
                "touchstart",
                (event) => {
                  event.stopPropagation();
                },
                true
              );
            }}
          />
        )}
      />
    </CalenderWrapper>
  );
}

export default Calender;
