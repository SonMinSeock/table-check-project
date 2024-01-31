import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef, useRef, useState } from "react";
import { ko } from "date-fns/locale";
import { IoIosArrowDown } from "react-icons/io";

const Label = styled.label`
  font-size: var(--font-size-3);
  span {
    font-size: var(--font-size-2);
  }
  .highlight-red {
    color: var(--color-alert-red);
  }
  margin-bottom: var(--space-2);
`;

function Calender({ selectedDates, setSelectedDates, index }) {
  const calendar = useRef(null);

  const handleDateChange = (date, index) => {
    const newDates = [...selectedDates];
    newDates[index] = date;
    setSelectedDates(newDates);
  };

  const CustomDatePickerInput = forwardRef(({ value, onClick, type = "date" }, ref) => {
    let format = value;

    if (type === "date") {
      format = value.split(" ")[1] + " " + value.split(" ")[2];
    }

    return (
      <div className="datapicker-container" onClick={onClick} ref={ref}>
        <span>{!value ? 0 : format}</span>
        <IoIosArrowDown />
      </div>
    );
  });
  return (
    <div>
      <Label htmlFor="date1">
        날짜<span className="highlight-red">(필수)</span>
      </Label>

      <DatePicker
        ref={calendar}
        locale={ko}
        selected={selectedDates[index]}
        onChange={(date) => handleDateChange(date, index)}
        dateFormat="yyyy년 MM월 dd일"
        placeholderText="yyyy-MM-dd"
        popperPlacement="auto"
        withPortal
        onFocus={(e) => e.target.blur()}
        customInput={<CustomDatePickerInput />}
      />
    </div>
  );
}

export default Calender;
