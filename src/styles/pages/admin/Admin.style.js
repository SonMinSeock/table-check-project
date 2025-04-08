import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-4);
`;

export const Main = styled.main`
  padding: var(--space-4);
`;

export const Nav = styled.nav`
  width: 35%;
  ul li {
    cursor: pointer;
    text-align: end;
  }
`;

export const H1 = styled.h1`
  width: 100%;
  text-align: end;
  font-size: var(--font-size-7);
  font-family: "Nanum Brush Script", cursive;
`;

export const H2 = styled.h2`
  font-size: 0.86rem;
  font-weight: bold;
  text-align: center;
  padding: var(--space-4);
`;

export const Card = styled.section`
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  border-radius: var(--border-radius-3);
  color: #696969;
  padding: var(--space-4);
  max-height: 520px;
  overflow: auto;
  font-weight: bold;
  margin-bottom: var(--space-4);
`;

export const Row = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--space-3);
  font-size: 0.78rem;
  &.adult-child-container {
    flex-direction: row;
    span:first-child,
    span:nth-child(2) {
      margin-right: 0.3rem;
    }
  }
  & .state-text,
  & .text-blue {
    color: var(--color-primary);
  }
  & .state-text-cancle {
    color: var(--color-alert-red);
  }
  & a {
    font-size: 1.02rem;
    color: var(--color-primary);
    &:hover {
      border-bottom: 1px solid var(--color-primary);
    }
    padding: 0.2rem;
  }
`;

export const Text = styled.span`
  margin-bottom: var(--space-3);
`;

export const Button = styled.button`
  width: 130px;
  color: white;
  &.btn-confirm,
  &.btn-save {
    background-color: var(--color-primary);
  }
  &.btn-cancle {
    background-color: var(--color-alert-red);
    margin-bottom: var(--space-3);
  }
  border: none;
  padding: var(--space-1);
  border-radius: var(--border-radius-3);
  cursor: pointer;
`;

export const Form = styled.form`
  & div:first-child {
    margin-bottom: var(--space-3);
  }
  & div:last-of-type {
    display: flex;
    justify-content: center;
  }
`;

export const Textarea = styled.textarea`
  border-radius: var(--border-radius-2);
  padding: var(--space-2);
`;
