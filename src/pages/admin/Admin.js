import { useState } from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-4);
`;

const Main = styled.main`
  padding: var(--space-4);
`;

const H1 = styled.h1`
  font-size: var(--font-size-7);
  font-weight: bold;
`;

const H2 = styled.h2`
  font-size: 0.86rem;
  font-weight: bold;
  text-align: center;
  padding: var(--space-4);
`;

const Card = styled.section`
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  border-radius: var(--border-radius-3);
  color: #696969;
  padding: var(--space-4);
  max-height: 520px;
  overflow: auto;
  font-weight: bold;
  margin-bottom: var(--space-4);
`;

const Row = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--space-3);
  font-size: 0.78rem;
  & .state-text,
  & .text-blue {
    color: var(--color-primary);
  }
  & .state-text-cancle {
    color: var(--color-alert-red);
  }
`;

const Text = styled.span`
  margin-bottom: var(--space-3);
`;

const Button = styled.button`
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

const Form = styled.form`
  & div:first-child {
    margin-bottom: var(--space-3);
  }
  & div:last-of-type {
    display: flex;
    justify-content: center;
  }
`;

const Textarea = styled.textarea`
  border-radius: var(--border-radius-2);
  padding: var(--space-2);
`;

function Admin() {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => setToggle((prev) => !prev);

  let cards = 1;

  const showCards = () => {
    const renderCards = [];
    for (let i = 0; i < cards; i++) {
      renderCards.push(
        <Card key={i}>
          <H2>1. 손민석(01022742538 | 첫 번째 예약)</H2>
          <Row>
            <Text>예약 요청한 날짜 시간</Text>
            <span>2024.02.04 | 13:30</span>
          </Row>
          <Row>
            <span className="state-text">현재 상태(예약 요청중)</span>
            {/* <span className="state-text">현재 상태(확정 대기중)</span> */}
            {/* <span className="state-text">현재 상태(예약 확정)</span> */}
            {/* <span className="state-text-cancle">현재 상태(예약 불가)</span> */}
            {/* <span className="state-text-cancle">현재 상태(자동 취소)</span> */}
          </Row>
          <hr />
          <Row>
            <Row>
              <Text>1차 예약 시간 : 2024.02.05 | 15:00</Text>
              <Button className="btn-confirm">1차 예약 가능</Button>
            </Row>
            <Row>
              <Text>2차 예약 시간 : 2024.02.05 | 17:00</Text>
              <Button className="btn-confirm">2차 예약 가능</Button>
            </Row>
            <Row>
              <Text>3차 예약 시간 : 2024.02.05 | 18:30</Text>
              <Button className="btn-confirm">3차 예약 가능</Button>
            </Row>
            {/* <Row>
              <span className="text-blue">1차 예약 가능 보낸시간 : 2024.02.04 | 13:50</span>
            </Row> */}
          </Row>
          <hr />
          <Row>
            <Button className="btn-cancle" onClick={onToggle}>
              예약 불가
            </Button>
            <Form>
              {toggle ? (
                <>
                  <div>
                    <Textarea rows={6}></Textarea>
                  </div>
                  <div>
                    <Button className="btn-save">저장</Button>
                  </div>
                </>
              ) : null}
            </Form>
          </Row>
          <hr />
          <Row>
            <Text>메시지 작성</Text>
            <Form>
              <div>
                <Textarea rows={6}></Textarea>
              </div>
              <div>
                <Button className="btn-save">저장</Button>
              </div>
            </Form>
          </Row>
          <hr />
          <Row>
            <Text>예약 확정 시간</Text>
            <span>2024.02.04 | 14:00</span>
          </Row>
        </Card>
      );
    }
    return renderCards;
  };
  return (
    <>
      <Header>
        <H1>오마타세 관리자</H1>
      </Header>
      <Main>{cards === 0 ? <H2>예약 내역</H2> : showCards()}</Main>
    </>
  );
}

export default Admin;
