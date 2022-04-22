import React, { useState } from "react";
import styled from "styled-components";
import emailMeBackground from "../public/Images/emailMeBackground.png";
import EmailMe from "./Custom/EmailMe";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CtaContainer = styled.div`
  width: auto;
  padding: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${`url(${emailMeBackground.src})`};
  background-size: cover;
  background-position: center;
  background-color: #000;
  height: 500px;

  @media screen and (max-width: 975px) {
    padding: 90px 24px;
  }
`;
const ContactWrap = styled.div`
  width: auto;
  color: #fff;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SectionHeading = styled.h2`
  font-family: degular-display, sans-serif !important;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  font-size: 7em;
  line-height: 110px;
  color: #fff;
  margin: 0px;
  max-width: 800px;
  text-align: center;
  margin-bottom: 40px;

  @media screen and (max-width: 1350px) {
    font-size: 5em;
    line-height: 100px;
  }

  @media screen and (max-width: 750px) {
    font-size: 3.5em;
    line-height: 60px;
  }
  @media screen and (max-width: 450px) {
    font-size: 2.8em;
    line-height: 45px;
    margin-bottom: 25px;
  }
`;
const TextSpan = styled.span`
  font-family: ivypresto-display, serif;
  text-transform: none;
  color: #ff3e05;
`;

const EmailWrap = styled.div`
  height: 190px;
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contact = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const btnControl = useAnimation();

  if (inView) {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.8, delay: 0.7 },
    });
    btnControl.start({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.8, delay: 0.5 },
    });
  }
  return (
    <CtaContainer ref={ref}>
      <ContactWrap>
        <SectionHeading
          as={motion.h2}
          initial={{
            y: -150,
            opacity: 0,
          }}
          animate={controls}
        >
          <TextSpan>Let's talk</TextSpan> about your project? <br />
        </SectionHeading>
        <EmailWrap
          as={motion.div}
          initial={{
            y: -150,
            opacity: 0,
          }}
          animate={btnControl}
        >
          <EmailMe text="Email Me" href="mailto:info@rajmahil.com" />
        </EmailWrap>
      </ContactWrap>
    </CtaContainer>
  );
};

export default Contact;
