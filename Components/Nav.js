import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import styled from "styled-components";
import NavLinks from "./Custom/NavLinks";
import RajLogo from "../public/Images/RajLogo.png";
import Image from "next/image";

const getWidth = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth;
  }
};

const Navbar = styled.nav`
  position: fixed;
  top: 0px;
  width: 100%;
  transition: all 0.3s ease-in-out;
  height: 8vh;
  z-index: 1000;
  color: #fff;
  background: ${({ navScroll }) =>
    navScroll > 150 ? "rgb(0, 0, 0, 0.2)" : "rgb(0, 0, 0, 0)"};
  padding: 5px 0px;
`;
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  justify-content: space-between;
  padding: 0px 90px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ navScroll }) => (navScroll > 150 ? "1500px" : "1600px")};
  transition: all 0.4s ease-out;

  @media screen and (max-width: 800px) {
    padding: 0px 45px;
  }

  @media screen and (max-width: 500px) {
    padding: 0px 22px;
  }
`;
const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
`;
const NavLinksWrap = styled.div`
  width: auto;
  display: ${({ navScroll }) => (navScroll > 150 ? "none" : "flex")};
  align-items: center;
  transition: all 0.3s ease-out;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
const MenuWrap = styled.div`
  display: ${({ navScroll }) => (navScroll > 150 ? "flex" : "none")};
  background: #ff3e05;
  color: #000;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-out;

  @media screen and (max-width: 1050px) {
    display: flex;
  }
`;
const ImageWrap = styled.div`
  width: 125px;
  cursor: pointer;
`;

const Nav = ({ toggle, isOpen }) => {
  const [navScroll, setNavScroll] = useState();
  const [windowWidth, setWindowWidth] = useState(getWidth());
  const [isHover, setIsHover] = useState(false);

  function logit() {
    setNavScroll(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWindowWidth(getWidth());
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <Navbar
      as={motion.div}
      navScroll={navScroll}
      initial={{
        y: -100,
        transition: { ease: "easeOut", duration: 0.7 },
      }}
      animate={{
        y: 0,
        transition: { ease: "easeOut", duration: 0.7 },
      }}
    >
      <NavContainer navScroll={navScroll}>
        <Link passHref href="/">
          <ImageWrap>
            <Image
              src={RajLogo}
              alt="Raj Mahil portfolio Logo, Web designer in Saskatoon, SK"
            />
          </ImageWrap>
        </Link>
        <NavLinksContainer>
          <NavLinksWrap navScroll={navScroll}>
            <NavLinks href="#aboutMe" text="About" />
            <NavLinks href="/projects" text="Projects" />
            <NavLinks href="/posts" text="Blog" />
            <NavLinks href="/contact" text="Contact Me" />
          </NavLinksWrap>
          <MenuWrap onClick={toggle} isOpen={isOpen} navScroll={navScroll}>
            <Hamburger toggled={isOpen} />
          </MenuWrap>
        </NavLinksContainer>
      </NavContainer>
    </Navbar>
  );
};

export default Nav;
