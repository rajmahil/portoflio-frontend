import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { MainButton } from "../styles/GlobalStyles";
import styled from "styled-components";
import MenuLinks from "./Custom/MenuLinks";
import Image from "next/image";
import MenuBackground from "../public/Images/MenuBackground.png";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../public/Images/MenuImages/image1.png";
import image2 from "../public/Images/MenuImages/image2.png";
import image3 from "../public/Images/MenuImages/image3.png";
import image4 from "../public/Images/MenuImages/image4.png";
import image5 from "../public/Images/MenuImages/image5.png";

const SidebarContainer = styled.aside`
  position: fixed;
  cursor: default;
  z-index: 1001;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
const SidebarWrapper = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  padding: 0px;
  text-align: left;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;
const MenuIconWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: #000;
  border-radius: 50%;
  padding: 10px;
  background: #ff3e05;
  margin: 50px;

  @media screen and (max-width: 500px) {
    margin: 20px;
  }
`;
const SidebarCol = styled.div`
  width: 50%;
  height: 100%;
  background: #000;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1050px) {
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    padding-left: 20px;
  }
`;
const SidebarColImage = styled.div`
  width: 50%;
  position: relative;
  overflow: hidden;

  background: #ff4b1f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff9068,
    #ff4b1f
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ff9068,
    #ff4b1f
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  overflow: hidden;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
const VideoWrap = styled.video`
  width: 50%;
  max-width: 100%;
  margin-bottom: -5px;
  position: absolute;
  bottom: 0;
  z-index: -5;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  position: absolute;
`;

const Sidebar = ({ isOpen, toggle }) => {
  const [isHomePageHover, setIsHomePageHover] = useState(false);
  const [isAboutHover, setIsAboutHover] = useState(false);
  const [isProjectsHover, setIsProjectsHover] = useState(false);
  const [isBlogHover, setIsBlogHover] = useState(false);
  const [isContactHover, setIsContactHover] = useState(false);

  useEffect(() => {
    console.log(isHomePageHover);
    console.log(isAboutHover);
  }, [isHomePageHover, isAboutHover]);
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <MenuIconWrap>
        <Hamburger toggled={() => !isOpen} />
      </MenuIconWrap>
      <SidebarWrapper>
        <SidebarColImage>
          <AnimatePresence>
            {isContactHover && (
              <BackgroundImage
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: "0.2" }}
                style={{
                  background: isContactHover ? `url(${image5.src})` : "none",
                }}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isBlogHover && (
              <BackgroundImage
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: "0.2" }}
                style={{
                  background: isBlogHover ? `url(${image4.src})` : "none",
                }}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isProjectsHover && (
              <BackgroundImage
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: "0.2" }}
                style={{
                  background: isProjectsHover ? `url(${image3.src})` : "none",
                }}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isAboutHover && (
              <BackgroundImage
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: "0.2" }}
                style={{
                  background: isAboutHover ? `url(${image2.src})` : "none",
                }}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isHomePageHover && (
              <BackgroundImage
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: "0.2" }}
                style={{
                  background: isHomePageHover ? `url(${image1.src})` : "none",
                }}
              />
            )}
          </AnimatePresence>
        </SidebarColImage>
        <SidebarCol>
          <div
            onMouseEnter={() => setIsHomePageHover(true)}
            onMouseLeave={() => setIsHomePageHover(false)}
          >
            <MenuLinks href="/" text="Homepage" />
          </div>
          <div
            onMouseEnter={() => setIsAboutHover(true)}
            onMouseLeave={() => setIsAboutHover(false)}
          >
            <MenuLinks href="#aboutMe" text="About" />
          </div>
          <div
            onMouseEnter={() => setIsProjectsHover(true)}
            onMouseLeave={() => setIsProjectsHover(false)}
          >
            <MenuLinks href="/projects" text="Projects" />
          </div>
          <div
            onMouseEnter={() => setIsBlogHover(true)}
            onMouseLeave={() => setIsBlogHover(false)}
          >
            <MenuLinks href="/posts" text="Blog" />
          </div>
          <div
            onMouseEnter={() => setIsContactHover(true)}
            onMouseLeave={() => setIsContactHover(false)}
          >
            <MenuLinks href="/contact" text="Contact Me" />
          </div>
        </SidebarCol>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
