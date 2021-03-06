import React from "react";
import styled, { keyframes } from "styled-components";

const SkBounce = keyframes`
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
`;

const SkRotate = keyframes`
  100% { transform: rotate(360deg); 
  -webkit-transform: rotate(360deg) 
  }
`;

const LoadingWrap = styled.div`
  height: 100vh;
  width: 100%;
  background: #fff;
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;
  -webkit-animation: ${SkRotate} 2s infinite linear;
  animation: ${SkRotate} 2s infinite linear;
`;

const Dot1 = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #333;
  border-radius: 100%;

  -webkit-animation: ${SkBounce} 2s infinite ease-in-out;
  animation: ${SkBounce} 2s infinite ease-in-out;
`;

const Dot2 = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: ${SkBounce} 2s infinite ease-in-out;
  animation: ${SkBounce} 2s infinite ease-in-out;
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
`;

const LoadingScreen = () => {
  return (
    <LoadingWrap>
      <Spinner>
        <Dot1 />
        <Dot2 />
      </Spinner>
    </LoadingWrap>
  );
};

export default LoadingScreen;
