import Image from "next/image";
import slidesData from "./TestimonialsData";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft, FaQuoteLeft } from "react-icons/fa";
import {
  SectionContainer,
  SectionHeadingThree,
  SectionSubtitle,
  TestimonialsWrap,
  IconWrap,
  TestTextWrap,
  SectionHeading,
  TestBtnWrap,
  SliderButtons,
  SectionParagraph,
  ClientTestWrap,
  ClientLogoWrap,
  ClientTextWrap,
} from "../styles/GlobalStyles";

const variants = {
  initial: { opacity: 1, transition: { type: "ease" } },
  transition: { opacity: 0, transition: { type: "ease" } },
};

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [firstShow, setFirstShow] = useState(false);
  const [showText, setShowText] = useState(true);

  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  const handleNext = () => {
    setShowText(false);
    setTimeout(() => {
      setShowText(true);
    }, 600);

    setTimeout(() => {
      setCurrentSlide(currentSlide + 1);

      slidesData.length - 2 === currentSlide && setNextDisabled(true);
      currentSlide >= 0 && setPrevDisabled(false);
    }, 600);
  };

  const handlePrevious = () => {
    setShowText(false);
    setTimeout(() => {
      setShowText(true);
    }, 600);

    setTimeout(() => {
      setCurrentSlide(currentSlide - 1);

      currentSlide === 1 && setPrevDisabled(true);
      currentSlide >= 0 && setNextDisabled(false);
    }, 600);
  };

  useEffect(() => {
    inView
      ? animation.start({
          y: 0,
          opacity: 1,
          transition: { type: "easeOut", duration: "0.8" },
        })
      : animation.start({
          y: "-100px",
          opacity: 0,
          transition: { type: "easeOut", duration: "0.8", delay: "1" },
        });
  }, [inView]);

  return (
    <SectionContainer>
      {/* <IconWrap ref={ref} as={motion.div} animate={animation}>
        <FaQuoteLeft />
      </IconWrap> */}
      <TestimonialsWrap ref={ref} as={motion.div} animate={animation}>
        <SectionHeading style={{ color: "#fff", marginBottom: "22px" }}>
          Words from Our Clients
        </SectionHeading>
        <TestTextWrap
          as={motion.div}
          animate={showText ? "initial" : "transition"}
          variants={variants}
        >
          <SectionParagraph
            style={{
              color: "#fff",
              fontSize: "1.1rem",
              textAlign: "center",
              lineHeight: "2",
              marginBottom: "10px",
              height: "160px",
            }}
          >
            {slidesData[currentSlide].testimonial}"
          </SectionParagraph>
          <ClientTestWrap>
            <ClientLogoWrap>
              <Image
                alt={`${slidesData[currentSlide].logoImage} - company logo`}
                src={slidesData[currentSlide].logoImage}
              />
            </ClientLogoWrap>
            <ClientTextWrap>
              <SectionHeadingThree
                style={{ color: "#fff", fontSize: "1.8em", margin: "0" }}
              >
                {slidesData[currentSlide].clientName}
              </SectionHeadingThree>
              <SectionSubtitle
                style={{ margin: "0", color: "#fff", fontSize: "1em" }}
              >
                {slidesData[currentSlide].companyName}
              </SectionSubtitle>
            </ClientTextWrap>
          </ClientTestWrap>
        </TestTextWrap>
        <TestBtnWrap>
          <SliderButtons disabled={prevDisabled} onClick={handlePrevious}>
            <FaArrowLeft />
          </SliderButtons>
          <SliderButtons disabled={nextDisabled} onClick={handleNext}>
            <FaArrowRight />
          </SliderButtons>
        </TestBtnWrap>
      </TestimonialsWrap>
    </SectionContainer>
  );
};

export default TestimonialSection;
