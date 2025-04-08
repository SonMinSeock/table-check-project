import styled from "styled-components";

export const Title = styled.h1`
  color: var(--color-white);
  font-size: 32px;
  padding: var(--space-6) var(--space-8);
  font-weight: bold;
  line-height: 40px;
`;

export const Paragraph = styled.p`
  text-align: center;

  margin: 0 auto;
  line-height: 23px;
  .highlight-blue {
    color: var(--color-primary);
    font-weight: bold;
  }
`;

export const Footer = styled.footer`
  font-size: 12px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding: 20px 0;
  line-height: 19px;
  background-color: var(--color-gray-900);
  color: #717171;
  strong {
    font-weight: bold;
  }
`;
