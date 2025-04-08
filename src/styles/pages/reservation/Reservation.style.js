import styled from "styled-components";

export const Main = styled.main`
  height: calc(100vh - 70px - 80px);
  overflow: scroll;
`;

export const Footer = styled.footer`
  position: fixed;
  width: 100%;
  height: 88px;
  max-width: 430px;
  bottom: 0;
  background-color: var(--color-gray-900);
  /* padding: var(--space-8) var(--space-4); */
  & button {
    height: 100%;
    font-size: 23px;
  }
`;

export const EmptyTitle = styled.h1`
  color: #000000;
  font-size: 1.5rem;
  font-weight: bold;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingTitle = styled(EmptyTitle)``;
