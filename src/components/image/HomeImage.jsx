import HomeBackgroundImage from "../../assets/images/HomeImage.png";
import { HomeImg, HomeImgContainer } from "./HomeImage.style";

function HomeImage() {
  return (
    <>
      <HomeImgContainer>
        <HomeImg src={HomeBackgroundImage} alt="일본 음식점 메인 이미지" decoding="async" />
      </HomeImgContainer>
    </>
  );
}

export default HomeImage;
