import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/form/includes/form-style";
import { IoCheckmark } from "react-icons/io5";
import DifrentTypeHeader from "../../../components/header/account/DifrentTypeHeader";

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
  &.cancle {
    border-color: var(--color-alert-red);
  }
  &.confirm {
    border: 2px solid var(--color-primary);
  }
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
  width: 125px;
  text-align: center;
  font-size: var(--font-size-3);
  color: #ffffff;
  background-color: var(--color-primary);
  padding: var(--space-2) var(--space-5);
  border-radius: var(--border-radius-3);
`;

const CancleStatusText = styled(StatusText)`
  background-color: var(--color-alert-red);
`;

const CardContentContainer = styled.section`
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
  &:nth-child(2) {
    padding-left: 10px;
    border-left: 1px solid #000000;
  }
`;
const CheckConfirm = styled.div`
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

const Paragraph = styled.p`
  color: var(--color-gray-800);
  margin: 0 var(--space-4);
  font-size: var(--font-size-3);
  margin-bottom: var(--space-4);
  line-height: 20px;
`;

const CancleParagraph = styled(Paragraph)`
  color: var(--color-alert-red);
`;

const ButtonWrapper = styled.section`
  padding: var(--space-4);
`;

const TitleH1 = styled.h1`
  font-weight: bold;
  font-size: var(--font-size-6);
  margin: var(--space-2) var(--space-4);
  line-height: 35px;
`;

function ReservationConfirm({ state }) {
  const navigate = useNavigate();
  return (
    <>
      <DifrentTypeHeader />
      <TitleH1>
        다시 한번 더<br /> 예약 정보를 확인해 주세요
      </TitleH1>
      <Paragraph>
        예약 취소는 불가하지만 만약 취소를 해야 한다
        <br /> 문의하기를 통해 꼭 알려주세요
      </Paragraph>
      <Card>
        <CardHeader>
          <Title>첫 번째 예약</Title>
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
        <CardContentFlex className="confirmed">
          <Wrapper>
            <CardContentLabel>날짜</CardContentLabel>
            <CardContentText>0</CardContentText>
          </Wrapper>
          <Wrapper>
            <CardContentLabel>시간</CardContentLabel>
            <CardContentText>0</CardContentText>
          </Wrapper>
          <CheckConfirm>
            <IoCheckmark color="white" size={13} />
          </CheckConfirm>
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

      <ButtonWrapper>
        <Button onClick={() => navigate("final")}>00/00 00:00 확정하기</Button>
      </ButtonWrapper>
    </>
  );
}

export default ReservationConfirm;
