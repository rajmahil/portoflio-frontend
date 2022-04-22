import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const ButtonWrap = styled.div`
  width: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #000;
`;
const ButtonText = styled.text`
  font-size: 2.5em;
  font-family: degular-display, sans-serif !important;
`;
const IconWrap = styled.div`
  font-size: 2.2em;
  display: flex;
  margin-left: ${({ isHover }) => (isHover ? "30px" : "10px")};
  transition: all 0.3s ease-in;
  padding: 15px;
  background: ${({ isHover }) => (isHover ? "#ff3e05" : "none")};
  border-radius: 50%;
  transform: ${({ isHover }) => (isHover ? "rotate(-25deg)" : "none")};
`;

const ViewProject = ({ text, href }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link passHref href={href}>
      <ButtonWrap
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        isHover={isHover}
      >
        <IconWrap isHover={isHover}>
          <AiOutlineArrowRight />
        </IconWrap>
      </ButtonWrap>
    </Link>
  );
};

export default ViewProject;
