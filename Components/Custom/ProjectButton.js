import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const ButtonWrap = styled.div`
  padding: 8px 0px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: ${({ white }) => (white ? "#fff" : "#000")};
  align-items: center;
  transition: all 0.2s ease-in;

  &:hover {
    transition: all 0.2s ease-in;
  }
`;
const ButtonText = styled.text`
  font-family: degular-display, sans-serif !important;
  text-transform: uppercase;
  font-size: 2.6em;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
  text-decoration: none !important;
`;

const CtaLine = styled.div`
  width: ${({ isHover }) => (isHover ? "100%" : "25%")};
  height: 5px;
  background: ${({ white }) => (white ? "#fff" : "#000")};
  transition: all 0.3s ease-out;
`;

const ProjectButton = ({ text, href, white }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <a href={href} passHref style={{ textDecoration: "none" }}>
      <ButtonWrap
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        white={white}
      >
        <ButtonText>{text}</ButtonText>
        <CtaLine isHover={isHover} white={white} />
      </ButtonWrap>
    </a>
  );
};

export default ProjectButton;
