import styled from "styled-components";

export const Card = styled.section`
  background-color: var(--color-white);
  margin: var(--space-4);
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
  &.cancle {
    border-color: var(--color-alert-red);
  }
  &.confirm {
    border: 2px solid var(--color-primary);
  }
`;

export const CardHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-4);
`;

export const Title = styled.h2`
  font-size: var(--font-size-6);
  font-weight: 600;
`;

export const CardContentContainer = styled.section`
  position: relative;
  border: 1px solid #717171;
  padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-4);
  border-radius: var(--border-radius-3);
  font-size: var(--font-size-3);
  & a {
    color: #5e5e5e;

    &:hover {
      border-bottom: 1px solid #000000;
    }
  }
  &.confirmed {
    border: 2px solid var(--color-primary);
  }
`;
export const CardContentLabel = styled.span`
  display: block;
  margin-bottom: var(--space-2);
  font-size: var(--font-size-3);
  font-weight: 600;
`;
export const CardContentFlex = styled(CardContentContainer)`
  display: flex;
`;
export const CardContentText = styled.span`
  font-size: var(--font-size-3);
`;
export const Wrapper = styled.div`
  width: 100%;
  &:nth-child(2) {
    padding-left: 10px;
    border-left: 1px solid #000000;
  }
`;
export const CheckConfirm = styled.div`
  position: absolute;
  top: -7px;
  right: -7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #ffffff;
  width: 15px;
  height: 15px;
  padding: 2px;
  background-color: var(--color-primary);
`;

export const Paragraph = styled.p`
  color: #757880;
  margin: 0 var(--space-4);
  font-size: var(--font-size-3);
  font-weight: 600;
  margin-bottom: var(--space-4);
  line-height: 21px;
`;

export const ButtonWrapper = styled.section`
  padding: var(--space-4);
`;

export const TitleH1 = styled.h1`
  font-weight: bold;
  font-size: var(--font-size-6);
  margin: var(--space-2) var(--space-4);
  line-height: 35px;
`;

export const CartContentMap = styled(CardContentContainer)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
