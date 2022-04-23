import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const LinksWrap = styled.div`
  width: fit-content;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    color: #ff3e05;
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 1050px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 550px) {
    margin-bottom: 32px;
  }
`;
const LinkText = styled.text`
  font-size: 5em;
  font-family: degular-display, sans-serif !important;
  font-style: italic;
  font-weight: 800;

  @media screen and (max-width: 1050px) {
    font-size: 4em;
  }
  @media screen and (max-width: 550px) {
    font-size: 3em;
  }
`;
const LinkLine = styled.div`
  height: 5px;
  background: #fff;
  width: ${({ isHover }) => (isHover ? "100%" : "0%")};
  transition: all 0.3s ease-out;
`;

const MenuLinks = ({ href, text }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link passHref href={href}>
      <LinksWrap
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <LinkText>{text}</LinkText>
        <LinkLine isHover={isHover} />
      </LinksWrap>
    </Link>
  );
};

export default MenuLinks;
