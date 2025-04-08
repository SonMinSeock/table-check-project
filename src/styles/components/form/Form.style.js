import styled from "styled-components";

export const Card = styled.form`
  background-color: var(--color-white);
  margin: var(--space-4) var(--space-6);
  padding: var(--space-8) var(--space-4);
  border-radius: var(--border-radius-2);
  border: 1px solid #000000;
  hr {
    background: var(--color-gray-700);
    height: 1px;
    border: 0;
    margin: var(--space-4) 0;
  }
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Title = styled.h2`
  font-size: var(--font-size-6);
  margin-bottom: var(--space-4);
  font-weight: bold;
`;

export const InputMapSection = styled.section`
  border: 1px solid #717171;
  padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-4);
  border-radius: var(--border-radius-3);
  input {
    margin-top: var(--space-2);
  }
`;

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
  margin-bottom: var(--space-2);
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 14px;
`;

export const DropMenuSection = styled.section`
  display: flex;
  border: 1px solid #717171;
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

export const Select = styled.select`
  border: none;
  background-color: var(--color-white);
  color: #000000;
  font: inherit;
`;

export const Paragraph = styled.p`
  font-size: 0.82rem;
  line-height: 21px;
  text-align: center;
  margin-bottom: 0.3rem;
  font-weight: bold;
  color: #5e5e5e;
`;
