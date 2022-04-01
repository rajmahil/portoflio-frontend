import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const ContactWrap = styled.div`
  width: auto;
  background: #ff3e05;
  border-radius: 500px;
  font-size: 1.6em;
  margin: 0px 10px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  padding: 5px 16px;
  &:hover {
  }
`;
const IconWrap = styled.div`
  color: #000;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContactText = styled.text`
  font-family: degular-display, sans-serif;
  color: #000;
  text-transform: uppercase;
  font-size: 1em;
  line-height: 20px;
`;

const ContactButton = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link href="/contact" passhref>
      <ContactWrap>
        <ContactText>Contact Me</ContactText>
      </ContactWrap>
    </Link>
  );
};

export default ContactButton;
