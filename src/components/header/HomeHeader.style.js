import styled from "styled-components";

export const Header = styled.header`
  section:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    #logo-title {
      font-size: var(--font-size-6);
      font-weight: bold;
    }
    padding: var(--space-4);
  }
`;

export const Nav = styled.nav`
  a:first-of-type {
    margin-right: var(--space-4);
  }
  font-size: var(--font-size-5);
`;
