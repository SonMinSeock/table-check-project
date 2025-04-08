import HomeHeader from "../../components/header/HomeHeader";
import HomeImage from "../../components/image/HomeImage";
import Form from "../../components/form/Form";
import { Title, Paragraph, Footer } from "../../styles/pages/home/Home.style";

function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <HomeImage />
        <Title>
          일본 음식점 예약
          <br /> 이제 줄서지 마세요
        </Title>
        <Form />
        <Paragraph>
          <strong className="highlight-blue">[무료로 예약 요청]</strong> 은 실제 예약이 아닙니다.
          <br /> 추후 예약 확정 의사를 여쭤보니
          <br /> 안심하고 확인해 보세요
        </Paragraph>
      </main>
      <Footer>
        <p>
          현재 <strong>'오마타세'</strong> 서비스는 정식 서비스가 아닌 시험 서비스로 운영되고
          <br /> 있습니다. 현재는 일본 현지 담당자가 해당 음식점 예약을 진행하고 있지
          <br />만 예기치 못한 문제가 발생하더라도 양해 부탁드립니다.
        </p>
      </Footer>
    </>
  );
}

export default Home;
