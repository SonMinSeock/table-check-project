import HomeBackgroundImage from "../../assets/images/HomeImage.webp";
import { HomeImg, HomeImgContainer } from "./HomeImage.style";

function HomeImage() {
  return (
    <>
      <HomeImgContainer>
        <HomeImg src={HomeBackgroundImage} alt="일본 음식점 메인 이미지" />
      </HomeImgContainer>
    </>
  );
}

export default HomeImage;
