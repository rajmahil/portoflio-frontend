import styled from "styled-components";
import Link from "next/link";
import { IoMdArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import heroBackground from "../public/Images/heroBackground.png";
import heroSecondImage from "../public/Images/heroSecondImage.png";
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${`url(${heroBackground.src})`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  @media screen and (max-width: 550px) {
    height: 100vh;
  }
`;
const HeroContentWrap = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const HeroText = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: degular-display, sans-serif !important;
  font-style: italic;
  font-size: 6em;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  margin: 0px;
  margin-bottom: 10px;
  z-index: 1000;
  text-shadow: 1px 1px 2px rgb(0, 0, 0, 0.6);

  @media screen and (max-width: 1190px) {
    font-size: 5em;
  }

  @media screen and (max-width: 1030px) {
    max-width: 100%;
    font-size: 4.2em;
    margin-bottom: 0px;
  }

  @media screen and (max-width: 850px) {
    font-size: 3.8em;
    margin-top: 50px;
    line-height: 75px;
  }

  @media screen and (max-width: 550px) {
    font-size: 3em;
    margin-top: 25px;
    margin-bottom: 10px;
    line-height: 55px;
  }

  @media screen and (max-width: 450px) {
    font-size: 2.8em;
    line-height: 45px;
  }
`;
const HeroTextSpan = styled.span`
  width: auto;
  color: #ff3e05;
  font-family: ivypresto-display, serif;
  margin-right: 20px;
`;
const HeroParagraph = styled.div`
  font-family: lato, sans-serif;
  font-style: italic;
  font-size: 1.8em;
  max-width: 1000px;
  z-index: 1000;
  text-shadow: 1px 1px 2px rgb(0, 0, 0, 0.6);

  @media screen and (max-width: 1030px) {
    font-size: 1.6em;
    max-width: 800px;
  }

  @media screen and (max-width: 550px) {
    font-size: 1.3em;
  }
`;
const IconWrap = styled.div`
  width: auto;
  position: absolute;
  font-size: 6em;
  bottom: 0;
`;
export const HeroButton = styled.div`
  font-family: lato, sans-serif;
  background: #ff3e05;
  font-style: italic;
  padding: 10px 22px;
  font-size: 1.6em;
  margin-top: 40px;
  transition: all 0.3s ease-out;
  z-index: 1000;
  color: #fff;
  border: 2px #ff3e05 solid;

  &:hover {
    background: #fff;
    color: #000;
    transition: all 0.3s ease-out;
    border: 2px #000 solid;
  }
`;
const ImageWrap = styled.div`
  width: auto;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: -150px;
  margin-right: -50px;
  transform: rotate(-20deg);

  @media screen and (max-width: 875px) {
    margin-top: -200px;
    margin-right: calc(50% - 125px);
  }
`;

const HeroImage = styled.img`
  width: 350px;

  @media screen and (max-width: 875px) {
    width: 250px;
  }
`;

const Hero = () => {
  const [isHover, setIsHover] = useState(false);
  const { scrollYProgress } = useViewportScroll();

  const transform = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1],
    ["rotate(-20deg)", "rotate(0deg)", "rotate(-20deg)"]
  );

  return (
    <HeroContainer>
      <HeroContentWrap>
        <ImageWrap as={motion.div} style={{ transform }}>
          <HeroImage
            src={heroSecondImage.src}
            alt="Raj Mahil, Web designer and developer in Saskatoon, Saskatchewan, Canada"
          />
        </ImageWrap>
        <HeroText
          as={motion.h1}
          initial={{
            y: -150,
            opacity: 0,
            transition: { ease: "easeOut", duration: 0.8 },
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.8, delay: 0.4 },
          }}
        >
          <HeroTextSpan>Creative</HeroTextSpan> Developer &amp; Designer
        </HeroText>
        <HeroParagraph
          as={motion.div}
          initial={{
            y: -150,
            opacity: 0,
            transition: { ease: "easeOut", duration: 0.8 },
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.8, delay: 0.2 },
          }}
        >
          Raj Mahil is a digital designer & developer from Canada, passionated
          about creating memorable digital experiences
        </HeroParagraph>
        <Link passHref href="/contact">
          <HeroButton
            as={motion.div}
            initial={{
              y: -150,
              opacity: 0,
              transition: { ease: "easeOut", duration: 0.8 },
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { ease: "easeOut", duration: 0.8 },
            }}
          >
            Let Get Started
          </HeroButton>
        </Link>
      </HeroContentWrap>
      <IconWrap>
        <IoMdArrowDown />
      </IconWrap>
    </HeroContainer>
  );
};

export default Hero;
