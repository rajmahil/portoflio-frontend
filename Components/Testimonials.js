import styled from "styled-components";
import Image from "next/image";
import Tape from "../public/Images/tape.png";
import { useState } from "react";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import SectionBackground from "../public/Images/SectionBackground.png";
import {
  SectionContainer,
  SectionParagraph,
  SectionHeading,
} from "../styles/GlobalStyles";
import slidesData from "./TestimonialsData";

const SectionWrap = styled.div`
  width: auto;
  display: flex;
`;
const TestContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 550px;
  background: #fff;
  padding: 0px 90px;
`;
const ImageWrap = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  top: -50px;
  left: 180px;
`;
const SecImageWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  bottom: -50px;
  right: 180px;
`;
const TextWrap = styled.div`
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TestimonialsText = styled.p`
  font-size: 1.2em;
  line-height: 40px;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
`;
const ButtonWrap = styled.div`
  width: auto;
  display: flex;
`;
const IconWrap = styled.div`
  background: #cc1310;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  padding: 10px;
  margin: 0px 5px;
  border-radius: 50%;
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background: #000;
    transition: all 0.2s ease-out;
  }
`;
const ClientsWrap = styled.div`
  width: auto;
  display: flex;
`;
const ClientImageWrap = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ClientTextWrap = styled.div`
  width: auto;
  padding-left: 16px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ClientName = styled.h4`
  font-size: 1.6em;
  margin: 0px;
`;
const ClientCompany = styled.p`
  font-size: 1em;
  margin: 0px;
`;

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextClick = () => {
    slidesData.length - 1 === currentSlide
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  const previousClick = () => {
    currentSlide === 0
      ? setCurrentSlide(slidesData.length - 1)
      : setCurrentSlide(currentSlide - 1);
  };

  return (
    <SectionContainer style={{ background: "#f7f7f7" }}>
      <SectionHeading>Testimonials</SectionHeading>
      <SectionWrap>
        <ImageWrap>
          <Image src={Tape} layout="fixed" width={250} height={218} />
        </ImageWrap>
        <TestContainer>
          <TextWrap>
            <TestimonialsText>
              {slidesData[currentSlide].testimonial}
            </TestimonialsText>
            <ClientsWrap>
              <ClientImageWrap>
                <Image src={slidesData[currentSlide].logoImage} />
              </ClientImageWrap>
              <ClientTextWrap>
                <ClientName>{slidesData[currentSlide].clientName}</ClientName>
                <ClientCompany>
                  {slidesData[currentSlide].companyName}
                </ClientCompany>
              </ClientTextWrap>
            </ClientsWrap>
            <ButtonWrap>
              <IconWrap onClick={nextClick}>
                <BiLeftArrowAlt />
              </IconWrap>
              <IconWrap onClick={previousClick}>
                <BiRightArrowAlt />
              </IconWrap>
            </ButtonWrap>
          </TextWrap>
        </TestContainer>
        <SecImageWrap>
          <Image src={Tape} layout="fixed" width={250} height={218} />
        </SecImageWrap>
      </SectionWrap>
    </SectionContainer>
  );
};

export default Testimonials;
