import Link from "next/link";
import styled from "styled-components";
import { useState, useEffect } from "react";

const NavLinkContainer = styled.div`
  width: auto;
  padding: 5px;
  border: 1px solid hsla(0, 0%, 0%, 0);
  transition: all 0.1s ease-in;
  border-radius: 100%;
  margin: 0px 10px;
`;
const NavLinkText = styled.a`
  font-size: 1.1em;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  font-weight: 800;
  letter-spacing: -0.5px;
  cursor: pointer;

  /* &:hover {
    color: #cc1310;
    transition: all 0.3s ease-in-out;
  } */
`;

const TextLine = styled.div`
  height: 2px;
  width: ${({ isHover }) => (isHover ? "100%" : "0%")};
  background: #fff;
  margin-top: 2px;
  transition: all 0.3s ease-in;
`;

const NavLinks = ({ href, text }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <NavLinkContainer
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link passHref href={href}>
        <NavLinkText>{text}</NavLinkText>
      </Link>
      <TextLine isHover={isHover} />
    </NavLinkContainer>
  );
};

export default NavLinks;
