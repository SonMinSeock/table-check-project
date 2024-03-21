import React from "react";
import styled from "styled-components";
import { MoonLoader } from "react-spinners";

const LoadingBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  overflow: hidden; /* 스크롤 막기 */
`;

const Loading = () => {
  return (
    <>
      <LoadingBackground>
        <MoonLoader color="#007AFF" />
      </LoadingBackground>
    </>
  );
};

export default Loading;
