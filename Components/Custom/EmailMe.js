import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import emailMe from "../../public/Images/emailMe.png";

const ButtonWrap = styled.div`
  width: ${({ isHover }) => (isHover ? "155px" : "140px")};
  height: ${({ isHover }) => (isHover ? "155px" : "140px")};
  background: ${`url(${emailMe.src})`};
  background-size: contain;
  color: #fff;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  transform: ${({ isHover }) => (isHover ? "rotate(-20deg)" : "none")};
  position: relative;
`;

const ButtonText = styled.div`
  font-family: ivypresto-display, serif;
  font-size: 2em;
  text-transform: uppercase;
  font-weight: 800;
  text-shadow: 5px 5px 20px 5px #000;
  position: absolute;
  bottom: 0;
  margin-bottom: -30px;
  text-align: center !important;
`;

const EmailMe = ({ text, href }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <a passHref href={href} style={{ textDecoration: "none" }}>
      <ButtonWrap
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        isHover={isHover}
      >
        <ButtonText>{text}</ButtonText>
      </ButtonWrap>
    </a>
  );
};

export default EmailMe;
