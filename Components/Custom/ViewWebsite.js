import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

const ButtonWrap = styled.div`
  width: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  color: ${({ black }) => (black ? "#000" : "#fff")};
`;
const ButtonText = styled.text`
  font-size: 1.2em;
  font-family: lato, sans-serif;
  font-style: italic;
  line-height: 40px;
`;
const IconWrap = styled.div`
  font-size: 1.6em;
  display: flex;
  margin-left: ${({ isHover }) => (isHover ? "20px" : "10px")};
  transition: all 0.3s ease-in;
`;

const ViewWebsite = ({ text, href, black }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <a style={{ textDecoration: "none" }} passHref href={href} target="_blank">
      <ButtonWrap
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        isHover={isHover}
        black={black}
      >
        <ButtonText>{text}</ButtonText>
        <IconWrap isHover={isHover}>
          <AiOutlineArrowRight />
        </IconWrap>
      </ButtonWrap>
    </a>
  );
};

export default ViewWebsite;
