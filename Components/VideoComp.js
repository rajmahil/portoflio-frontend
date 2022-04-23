import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QuoteBackground from "../public/Images/QuoteBackground.png";
import quoteMobileBackground from "../public/Images/quoteMobileBackground.png";
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";

const VideoContainer = styled.div`
  width: auto;
  height: 700px;
  overflow: hidden;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: flex-end;
  background: ${`url(${QuoteBackground.src})`};
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1100px) {
    height: 550px;
  }

  @media screen and (max-width: 550px) {
    background: ${`url(${quoteMobileBackground.src})`};
    background-size: cover;
    height: 400px;
  }
`;
const VideoWrap = styled.video`
  width: auto;
  margin-bottom: -5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -5;
  /* -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  /* filter: grayscale(100%); */

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const VideoSource = styled.source`
  height: 500px;
  width: auto;
`;

const TextWrap = styled.div`
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  white-space: nowrap;
  position: absolute;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;
const Text = styled.h2`
  width: auto;
  text-align: center;
  color: #fff;
  font-family: degular-display, sans-serif !important;
  text-transform: uppercase;
  margin: 0px;
  margin-bottom: 5px;
  line-height: 0px;

  @media screen and (max-width: 1450px) {
    font-size: 1em;
  }

  @media screen and (max-width: 1100px) {
    font-size: 0.9em;
  }
  @media screen and (max-width: 850px) {
    font-size: 0.7em;
  }
  @media screen and (max-width: 650px) {
    font-size: 0.5em;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.42em;
    text-shadow: 1px 1px 2px rgb(0, 0, 0, 0.5);
  }
`;
const TextSpan = styled.span`
  font-family: ivypresto-display, serif;
  text-transform: none;
  color: #ff3e05;
`;

const VideoComp = () => {
  const { scrollYProgress } = useViewportScroll();

  const yPosAnim = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    ["4em", "5em", "6em"]
  );

  return (
    <VideoContainer>
      <VideoWrap autoPlay muted loop id="video">
        <VideoSource
          src="https://balmah.dreamhosters.com/portVideo.mp4"
          type="video/mp4"
        />
      </VideoWrap>
      <TextWrap as={motion.div} style={{ fontSize: yPosAnim }}>
        <Text>
          <TextSpan> Creativity</TextSpan> is a mind set free
        </Text>
      </TextWrap>
    </VideoContainer>
  );
};

export default VideoComp;
