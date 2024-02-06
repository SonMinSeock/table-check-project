import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";
import { ko } from "date-fns/locale";
import { IoIosArrowDown } from "react-icons/io";
import { Controller } from "react-hook-form";
import { reservationAtom } from "../../recoil/reservation/reservation";
import { useSetRecoilState } from "recoil";
import { dateAtom } from "../../recoil/date/date";

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

function TimeSelector({ index, control }) {
  const setDateTime = useSetRecoilState(dateAtom);

  const setRegisterName = () => {
    if (index === 0) {
      return "firstTime";
    } else if (index === 1) {
      return "secondTime";
    } else if (index === 2) {
      return "thirdTime";
    }
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
        시간{index === 0 ? <span className="highlight-red">(필수)</span> : <span>({index + 1}순위)</span>}
      </Label>
      <Controller
        name={setRegisterName()}
        control={control}
        rules={index === 0 ? { required: true } : { required: false }}
        render={({ field: { value, onChange } }) => (
          <DatePicker
            // placeholderText="시간을 선택하세요"
            locale={ko}
            selected={value}
            onChange={(time) => {
              if (index === 0) {
                setDateTime((prev) => ({
                  ...prev,
                  firstTime: time.toTimeString().slice(0, 8),
                }));
              } else if (index === 1) {
                setDateTime((prev) => ({
                  ...prev,
                  secondTime: time.toTimeString().slice(0, 8),
                }));
              } else if (index === 2) {
                setDateTime((prev) => ({
                  ...prev,
                  thirdTime: time.toTimeString().slice(0, 8),
                }));
              }
              onChange(time);
            }}
            showTimeSelect
            showTimeSelectOnly
            dateFormat="HH:mm"
            popperPlacement="auto" // 팝업이 화면 중앙에 나타나도록 설정
            withPortal
            onFocus={(e) => e.target.blur()}
            customInput={<CustomDatePickerInput type="time" />}
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
    </div>
  );
}

export default TimeSelector;
