import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

const ButtonWrap = styled.div`
  width: fit-content;
  font-style: italic;
  font-size: 1.4em;
  cursor: pointer;
  transition: all 0.3s ease-out;
`;

const ButtonTextWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;

const ButtonText = styled.div`
  width: auto;
`;

const IconWrap = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: ${({ isHover }) => (isHover ? "20px" : "10px")};
  font-size: 1.1em;
  transition: all 0.3s ease-out;
`;

const ButtonLine = styled.div`
  width: 100%;
  height: 2px;
  background: #000;
`;

const ReadBlog = ({ text, href }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link passHref href={href}>
      <ButtonWrap
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        isHover={isHover}
      >
        <ButtonTextWrap>
          <ButtonText>{text}</ButtonText>
          <IconWrap isHover={isHover}>
            <AiOutlineArrowRight />
          </IconWrap>
        </ButtonTextWrap>
        <ButtonLine />
      </ButtonWrap>
    </Link>
  );
};

export default ReadBlog;
