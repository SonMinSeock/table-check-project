import styled from "styled-components";

export const HomeImgContainer = styled.div`
  position: relative;
  margin: var(--space-2) var(--space-4);
  z-index: -1;
`;

export const HomeImg = styled.img`
  position: absolute;
  width: 100%;
  height: 15rem;
  object-fit: cover;
  filter: brightness(0.5);
  border-radius: var(--border-radius-2);
`;
