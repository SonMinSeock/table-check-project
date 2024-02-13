import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef, useRef } from "react";
import { ko } from "date-fns/locale";
import { IoIosArrowDown } from "react-icons/io";
import { Controller } from "react-hook-form";
import { dateAtom } from "../../recoil/date/date";
import { useSetRecoilState } from "recoil";

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

function Calender({ index, control }) {
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

  const CustomDatePickerInput = forwardRef(({ value, onClick, type = "date" }, ref) => {
    let format = value;

    if (type === "date") {
      format = value.split(" ")[1] + " " + value.split(" ")[2];
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
            dateFormat="yyyy년 MM월 dd일"
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
