import styled from "styled-components";

export const Form = styled.form`
  height: 100%;
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-gray-300);
`;

export const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  &:first-of-type input {
    margin-bottom: var(--space-9);
  }
  &:nth-of-type(2) input {
    margin-bottom: var(--space-2);
  }
`;
export const Label = styled.label`
  font-weight: 600;
  font-size: var(--font-size-3);
  margin-bottom: var(--space-2);
`;
export const Input = styled.input`
  font-size: var(--font-size-5);
  border-bottom: 1px solid var(--color-gray-700);
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 0.3rem 0;
  &::placeholder {
    color: var(--color-gray-800);
  }
`;

export const Paragraph = styled.p`
  font-size: var(--font-size-2);
`;

export const LinkContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & a {
    margin-bottom: var(--space-4);
    color: #5e5e5e;
    font-size: var(--font-size-3);
  }
`;
