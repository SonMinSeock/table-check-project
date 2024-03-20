import React, { useEffect } from "react";
import HomeBackgroundImage from "../../assets/images/HomeImage.webp";
import { HomeImg, HomeImgContainer } from "./HomeImage.style";

function HomeImage() {
  useEffect(() => {
    // 이미지를 사전로드합니다.
    const img = new Image();
    img.src = HomeBackgroundImage;
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행되도록 빈 배열을 전달합니다.

  return (
    <>
      <HomeImgContainer>
        <HomeImg src={HomeBackgroundImage} alt="일본 음식점 메인 이미지" />
      </HomeImgContainer>
    </>
  );
}

export default HomeImage;
