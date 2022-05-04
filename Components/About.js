import Image from "next/image";
import styled from "styled-components";
import aboutMeImage from "../public/Images/aboutMeImage.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HeroButton } from "./Hero";
import Link from "next/link";
import { SectionContainer } from "../styles/GlobalStyles";

const AboutColWrap = styled.div`
  width: 100%;
  flex-direction: row;
  max-width: 1620px;
  display: flex;

  @media screen and (max-width: 1190px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;
const AboutCol = styled.div`
  width: 50%;
  padding: 45px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;

  @media screen and (max-width: 1575px) {
    padding: 0px;
  }

  @media screen and (max-width: 1190px) {
    width: 100%;
  }
`;
const AboutCol2 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  overflow: hidden;

  @media screen and (max-width: 1190px) {
    width: 100%;
    margin-bottom: 45px;
  }
`;
const AboutTextWrap = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 350px;
  margin-right: 45px;
  text-decoration: none !important;

  @media screen and (max-width: 1090px) {
    margin-top: 0px;
    min-width: auto;
    position: static;
  }

  @media screen and (max-width: 475px) {
    margin-right: auto;
  }
`;
const AboutHeading = styled.h2`
  font-family: degular-display, sans-serif !important;
  font-style: italic;
  font-weight: 800;
  font-size: 4em;
  margin: 0px;

  @media screen and (max-width: 475px) {
    font-size: 3em;
  }
`;

const AboutHeadingSpan = styled.span`
  color: #ff3e05;
  font-family: ivypresto-display, serif;
`;

const AboutParagraph = styled.p`
  font-size: 1.1em;
  color: #000;
  font-weight: 300;
  font-style: italic;
  line-height: 35px;
  margin-top: 10px;

  @media screen and (max-width: 475px) {
    font-size: 1em;
  }
`;

const About = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const headingControl = useAnimation();
  const paragraphControl = useAnimation();
  const buttonControl = useAnimation();

  if (inView) {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.8, delay: 0.5 },
    });
    headingControl.start({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.8, delay: 0.7 },
    });
    paragraphControl.start({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.8, delay: 0.5 },
    });
    buttonControl.start({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.8, delay: 0.3 },
    });
  }

  return (
    <SectionContainer id="aboutMe" style={{ background: "#f9f9f9" }}>
      <AboutColWrap ref={ref}>
        <AboutCol>
          <AboutTextWrap>
            <AboutHeading
              as={motion.h2}
              initial={{
                y: -150,
                opacity: 0,
              }}
              animate={headingControl}
            >
              <AboutHeadingSpan>More </AboutHeadingSpan> About Me
            </AboutHeading>
            <AboutParagraph
              as={motion.div}
              initial={{
                y: -150,
                opacity: 0,
              }}
              animate={paragraphControl}
            >
              Hello! Bonjour! My name is Raj. I am a creative developer from the
              Canadian prairies focused on producing memorable mobile and web
              experiences. Over the last five years, I have worked with many
              businesses from various industries ranging from non-profits to
              financial institutions. My work philosophy revolves around
              creating functional design experiences that leave a positive
              impact. In my opinion, great design integrates aspirations of art,
              science, and culture. Inspiring art has the ability to transcend
              societal and political differences to unite through aesthetics and
              beauty. In a world with significant polarities, we can recognize,
              accept and celebrate differences instead of ridicule them. Art and
              great design offer a vehicle for creating understanding among
              individuals. <br /> <br />
              Do you have a project in mind? Contact me and let's discuss it
              over a coffee! :)
            </AboutParagraph>
            <a
              passHref
              href="/contact"
              style={{ textDecoration: "none !important" }}
            >
              <HeroButton
                as={motion.div}
                initial={{
                  y: -150,
                  opacity: 0,
                }}
                animate={buttonControl}
              >
                Contact Me!
              </HeroButton>
            </a>
          </AboutTextWrap>
        </AboutCol>
        <AboutCol2
          as={motion.div}
          initial={{
            y: -150,
            opacity: 0,
          }}
          animate={controls}
        >
          <Image
            src={aboutMeImage}
            alt="Raj Mahil Image, Web designer and developer in Saskatoon, SK, Canada"
          />
        </AboutCol2>
      </AboutColWrap>
    </SectionContainer>
  );
};

export default About;
