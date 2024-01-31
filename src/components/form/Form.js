import styled from "styled-components";
import Calender from "../calender/Calender";
import TimeSelector from "../time-selector/TimeSelector";
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
  width: 100%;
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
  & > div:first-of-type {
    border-right: 1px solid #000000;
  }
  .datapicker-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  font-size: var(--font-size-3);
  .date-record {
    display: none;
  }
`;

const Select = styled.select`
  border: none;
  background-color: var(--color-white);
  color: #000000;
  font: inherit;
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
        <Calender selectedDates={selectedDates} setSelectedDates={setSelectedDates} index={0} />
        <TimeSelector selectedTimes={selectedTimes} setSelectedTimes={setSelectedTimes} index={0} />
      </DropMenuSection>
      {/* 두 번째 날짜와 시간 */}
      <DropMenuSection>
        <Calender selectedDates={selectedDates} setSelectedDates={setSelectedDates} index={1} />
        <TimeSelector selectedTimes={selectedTimes} setSelectedTimes={setSelectedTimes} index={1} />
      </DropMenuSection>
      {/* 세 번째 날짜와 시간 */}
      <DropMenuSection>
        <Calender selectedDates={selectedDates} setSelectedDates={setSelectedDates} index={2} />
        <TimeSelector selectedTimes={selectedTimes} setSelectedTimes={setSelectedTimes} index={2} />
      </DropMenuSection>
      <Button>무료 예약 확인하기</Button>
    </Card>
  );
}

export default Form;
