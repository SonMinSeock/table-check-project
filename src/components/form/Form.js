import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const Card = styled.form`
  background-color: var(--color-white);
  margin: var(--space-4) var(--space-6);
  padding: var(--space-8) var(--space-4);
  border-radius: var(--border-radius-1);
  border: 1px solid #000000;
  hr {
    background: var(--color-gray);
    height: 1px;
    border: 0;
  }
`;

const Title = styled.h2`
  font-size: var(--font-size-6);
  margin-bottom: var(--space-4);
`;

const InputMapSection = styled.section`
  border: 1px solid #000000;
  padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-4);
  border-radius: var(--border-radius-3);
  input {
    margin-top: var(--space-2);
  }
`;

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

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000000;
  width: 60%;
`;

const DropMenuSection = styled.section`
  display: flex;
  border: 1px solid #000000;
  border-radius: var(--border-radius-3);
  padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-4);
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 10px;
  }
  p:first-of-type {
    border-right: 1px solid #000000;
  }
  input {
    width: 100%;
  }
`;

const Select = styled.select`
  border: none;
  background-color: var(--color-white);
  color: #000000;
`;

const Button = styled.button`
  width: 100%;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: var(--space-3);
  border-radius: var(--border-radius-2);
  font-size: 1.1rem;
  cursor: pointer;
`;

function Form() {
  const [selectedDates, setSelectedDates] = useState([null, null, null]);
  const [selectedTimes, setSelectedTimes] = useState([null, null, null]);

  const handleDateChange = (date, index) => {
    const newDates = [...selectedDates];
    newDates[index] = date;
    setSelectedDates(newDates);
  };

  const handleTimeChange = (time, index) => {
    const newTimes = [...selectedTimes];
    newTimes[index] = time;
    setSelectedTimes(newTimes);
  };

  // popperModifiers를 사용하여 모바일에서의 스크롤 및 터치 동작을 막음
  const popperModifiers = {
    preventOverflow: {
      enabled: true,
      escapeWithReference: false, // 이 값이 false이면 올라가지 않습니다.
      boundariesElement: "viewport",
    },
  };
  return (
    <Card>
      <Title>첫 번째 예약</Title>
      <section></section>
      <InputMapSection>
        <Label htmlFor="map-link">
          구글 지도 음식점 링크 공유<span className="highlight-red">(필수)</span>
        </Label>
        <Input type="url" id="map-link" placeholder="https://www.google.com/maps" />
      </InputMapSection>
      <DropMenuSection>
        <div>
          <Label htmlFor="adult-number">
            성인<span className="highlight-red">(필수)</span>
          </Label>
          <Select id="adult-number" name="adult-number">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="child-number">
            어린이<span className="highlight-red">(필수)</span>
          </Label>
          <Select id="child-number" name="child-number">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
        </div>
      </DropMenuSection>
      <hr />
      {/* 첫 번째 날짜와 시간 */}
      <DropMenuSection>
        <div>
          <Label htmlFor="date1">
            날짜<span className="highlight-red">(필수)</span>
          </Label>
          <DatePicker
            id="date1"
            selected={selectedDates[0]}
            onChange={(date) => handleDateChange(date, 0)}
            dateFormat="yyyy-MM-dd"
            placeholderText="yyyy-MM-dd"
          />
        </div>
        <div>
          <Label htmlFor="time1">
            시간<span className="highlight-red">(필수)</span>
          </Label>
          <DatePicker
            id="time1"
            selected={selectedTimes[0]}
            onChange={(time) => handleTimeChange(time, 0)}
            showTimeSelect
            showTimeSelectOnly
            dateFormat="HH:mm"
            placeholderText="시간을 선택하세요"
          />
        </div>
      </DropMenuSection>
      {/* 두 번째 날짜와 시간 */}
      <DropMenuSection>
        <div>
          <Label htmlFor="date2">
            날짜<span>(선택)</span>
          </Label>
          <DatePicker
            id="date2"
            selected={selectedDates[1]}
            onChange={(date) => handleDateChange(date, 1)}
            dateFormat="yyyy-MM-dd"
            placeholderText="yyyy-MM-dd"
          />
        </div>
        <div>
          <Label htmlFor="time2">
            시간<span>(선택)</span>
          </Label>
          <DatePicker
            id="time2"
            selected={selectedTimes[1]}
            onChange={(time) => handleTimeChange(time, 1)}
            showTimeSelect
            showTimeSelectOnly
            dateFormat="HH:mm"
            placeholderText="시간을 선택하세요"
          />
        </div>
      </DropMenuSection>
      {/* 세 번째 날짜와 시간 */}
      <DropMenuSection>
        <div>
          <Label htmlFor="date3">
            날짜<span>(선택)</span>
          </Label>
          <DatePicker
            id="date3"
            selected={selectedDates[2]}
            onChange={(date) => handleDateChange(date, 2)}
            dateFormat="yyyy-MM-dd"
            placeholderText="yyyy-MM-dd"
          />
        </div>
        <div>
          <Label htmlFor="time3">
            시간<span>(선택)</span>
          </Label>
          <DatePicker
            id="time3"
            selected={selectedTimes[2]}
            onChange={(time) => handleTimeChange(time, 2)}
            showTimeSelect
            showTimeSelectOnly
            dateFormat="HH:mm"
            placeholderText="시간을 선택하세요"
          />
        </div>
      </DropMenuSection>
      <Button>무료 예약 확인하기</Button>
    </Card>
  );
}

export default Form;
