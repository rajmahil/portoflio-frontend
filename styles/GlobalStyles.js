import styled from "styled-components";
import Image from "next/image";
import SectionBackground from "../public/Images/SectionBackground.png";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #f5f1e1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: -5px;
  overflow: none;
`;

export const HeroTextWrap = styled.div`
  max-width: 800px;
  color: #000;
`;

export const HeroHeading = styled.h1`
  font-size: 2.8em;
  letter-spacing: -0ch.5px;
  font-weight: 900;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 12px;
`;

export const HeroSpan = styled.span`
  color: #f26530;
`;

export const HeroParagraph = styled.p`
  font-family: lato, sans-serif;
  color: #454545;
  font-size: 1.1em;
  font-weight: 700;
  margin: 0px;
  text-align: center;
  line-height: 28px;
`;

export const HeroImageWrap = styled.div`
  overflow: hidden;
  width: 1050px;
  max-width: 100%;
`;

export const MainButton = styled.button`
  font-size: 1.1em;
  cursor: pointer;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  padding: 12px 24px;
  letter-spacing: -0.5px;
  border: none;
  background-color: #d10000;
  transition: all 0.3s ease-in-out;
  border-radius: 0px;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #000;
  }
`;

export const SecButton = styled.button`
  font-size: 1.1em;
  cursor: pointer;
  text-decoration: none;
  font-family: lato, sans-serif;
  font-weight: 600;
  padding: 10px 0px;
  border: none;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: #000;
    padding-left: 12px;
  }
`;

export const SectionContainer = styled.div`
  width: auto;
  padding: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  z-index: 1;
  position: relative;
  overflow: hidden;
  color: #000;

  @media screen and (max-width: 650px) {
    padding: 90px 12px;
  }
`;

export const SectionHeadingThree = styled.h3`
  font-size: 2em;
  margin: 0;
  margin-bottom: 5px;
`;

export const SectionSubtitle = styled.p`
  font-family: lato, sans-serif;
  font-size: 600;
  color: #fff;
  padding: 0;
  margin: 0;
`;

export const LogoGridWrap = styled.div`
  display: grid;
  justify-content: center;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(auto, 250px));
  max-width: 1290px;
  width: 100%;
`;

export const LogoImageWrap = styled.div`
  padding: 20px 20px 20px 0px;
`;

export const TestimonialsWrap = styled.div`
  background: #f26530;
  padding: 90px 90px 80px 90px;
  width: 100%;
  max-width: 1090px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TestTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
`;

export const TestBtnWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ClientTestWrap = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  margin-bottom: 22px;
`;

export const ClientLogoWrap = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ClientTextWrap = styled.div`
  width: auto;
  padding-left: 12px;
`;

export const SliderButtons = styled.button`
  border: none;
  border-radius: 50%;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-left: 3px;
  margin-right: 3px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
`;

export const IconWrap = styled.div`
  border-radius: 50%;
  background: #fff;
  width: 65px;
  height: 65px;
  display: grid;
  place-items: center;
  font-size: 1.4em;
  color: #f26530;
  border: 5px solid #f26530;
  position: relative;
  top: 32.5px;
  z-index: 100;
`;

export const AboutColWrap = styled.div`
  width: 100%;
  flex-direction: row;
  max-width: 1420px;
  display: flex;
`;

export const AboutCol = styled.div`
  width: 40%;
  padding: 45px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
`;

export const AboutCol2 = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutCard = styled.div`
  background-color: #f5f1e1;
  height: 300px;
  width: 420px;
  position: relative;
  left: 35%;
  padding: 60px;
`;
