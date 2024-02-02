import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.section`
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
`;

const CardHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-4);
`;

const Title = styled.h2`
  font-size: var(--font-size-6);
`;

const StatusText = styled.span`
  font-size: var(--font-size-3);
  color: #ffffff;
  background-color: var(--color-primary);
  padding: var(--space-2) var(--space-5);
  border-radius: var(--border-radius-3);
`;

const CardContentContainer = styled.section`
  border: 1px solid #000000;
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
`;
const CardContentLabel = styled.span`
  display: block;
  margin-bottom: var(--space-2);
  font-size: var(--font-size-3);
`;
const CardContentFlex = styled(CardContentContainer)`
  display: flex;
`;
const CardContentText = styled.span`
  font-size: var(--font-size-3);
`;
const Wrapper = styled.div`
  width: 100%;
  &:last-child {
    padding-left: 10px;
    border-left: 1px solid #000000;
  }
`;

function ReservationCard() {
  return (
    <>
      <Card>
        <CardHeader>
          <Title>첫 번째 예약</Title>
          <StatusText>예약 요청중</StatusText>
        </CardHeader>
        <CardContentContainer>
          <CardContentLabel>구글 지도 음식점 링크 공유</CardContentLabel>
          <Link to="https://www.google.com/maps" target="_blank">
            https://www.google.com/maps
          </Link>
        </CardContentContainer>
        <CardContentFlex>
          <Wrapper>
            <CardContentLabel>성인</CardContentLabel>
            <CardContentText>0</CardContentText>
          </Wrapper>
          <Wrapper>
            <CardContentLabel>어린이</CardContentLabel>
            <CardContentText>0</CardContentText>
          </Wrapper>
        </CardContentFlex>
        <hr />
        <CardContentFlex>
          <Wrapper>
            <CardContentLabel>날짜</CardContentLabel>
            <CardContentText>0</CardContentText>
          </Wrapper>
          <Wrapper>
            <CardContentLabel>시간</CardContentLabel>
            <CardContentText>0</CardContentText>
          </Wrapper>
        </CardContentFlex>
        <CardContentFlex>
          <Wrapper>
            <CardContentLabel>날짜</CardContentLabel>
            <CardContentText>0</CardContentText>
          </Wrapper>
          <Wrapper>
            <CardContentLabel>시간</CardContentLabel>
            <CardContentText>0</CardContentText>
          </Wrapper>
        </CardContentFlex>
        <CardContentFlex>
          <Wrapper>
            <CardContentLabel>날짜</CardContentLabel>
            <CardContentText>0</CardContentText>
          </Wrapper>
          <Wrapper>
            <CardContentLabel>시간</CardContentLabel>
            <CardContentText>0</CardContentText>
          </Wrapper>
        </CardContentFlex>
      </Card>
    </>
  );
}

export default ReservationCard;
