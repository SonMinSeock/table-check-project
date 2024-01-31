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

function TimeSelector({ selectedTimes, setSelectedTimes, index }) {
  const handleTimeChange = (time, index) => {
    const newTimes = [...selectedTimes];
    newTimes[index] = time;
    setSelectedTimes(newTimes);
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
      <Label htmlFor="time1">
        시간<span className="highlight-red">(필수)</span>
      </Label>
      <DatePicker
        locale={ko}
        selected={selectedTimes[index]}
        onChange={(time) => handleTimeChange(time, index)}
        showTimeSelect
        showTimeSelectOnly
        dateFormat="HH:mm"
        placeholderText="시간을 선택하세요"
        popperPlacement="auto" // 팝업이 화면 중앙에 나타나도록 설정
        withPortal
        onFocus={(e) => e.target.blur()}
        customInput={<CustomDatePickerInput type="time" />}
      />
    </div>
  );
}

export default TimeSelector;
