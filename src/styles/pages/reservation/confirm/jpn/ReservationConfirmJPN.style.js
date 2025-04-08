import styled from "styled-components";

export const Main = styled.main`
  height: 90%;
  padding: 5rem var(--space-4);
  img {
    width: 254px;
    height: auto;
  }
  & .label {
    margin-bottom: var(--space-2);
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  & > span {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
  }
`;

export const Footer = styled.footer`
  padding: 0 var(--space-4);
  display: flex;
  align-items: center;
`;
