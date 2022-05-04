import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import ViewWebsite from "./Custom/ViewWebsite.js";

const ProjectContainer = styled.div`
  width: 100%;
  border-bottom: 3px solid #000;
  margin-bottom: 90px;
  display: flex;
  height: 525px;

  @media screen and (max-width: 1375px) {
    height: auto;
    padding-bottom: 90px;
  }

  @media screen and (max-width: 975px) {
    flex-direction: column;
    padding-bottom: 45px;
    margin-bottom: 45px;
  }
`;

const ColLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 975px) {
    width: auto;
  }
`;

const ColRight = styled.div`
  width: 50%;
  @media screen and (max-width: 975px) {
    width: auto;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 5em;
  font-family: degular-display, sans-serif !important;
  font-style: italic;
  margin-top: 0px;
  margin-bottom: 10px;
  line-height: 90px;

  @media screen and (max-width: 1530px){
    font-size: 4.5em;
    line-height: 80px;
  }

  @media screen and (max-width: 1375px) {
    font-size: 4.2em;
    line-height: 70px;
  }
  @media screen and (max-width: 1190px) {
    font-size: 3.5em;
    line-height: 60px;
  }

  @media screen and (max-width: 500px) {
    font-size: 3em;
    line-height: 55px;
  }
`;

const ProjectDescription = styled.div`
  font-size: 1.2em;
  font-weight: 300;
  font-style: italic;
`;

const ImageOverlay = styled.div`
  width: auto;
  position: relative;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  display: ${({ isHover }) => (isHover ? "block" : "none")};

  @media screen and (max-width: 975px) {
    display: none;
  }
`;

const OverlayImage = styled.img`
  width: 800px;
  position: absolute;
  margin-left: auto;

  @media screen and (max-width: 1375px) {
    width: 600px;
  }

  @media screen and (max-width: 1190px) {
    width: 550px;
  }
`;

const IndexWrap = styled.div`
  background: #000;
  color: #fff;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 975px) {
    margin-bottom: 5px;
  }

  @media screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;

const IndexText = styled.div`
  font-size: 3em;
  font-family: degular-display, sans-serif !important;
  margin-bottom: 5px;

  @media screen and (max-width: 500px) {
    font-size: 1.8em;
  }
`;

const ServicesHeading = styled.h4`
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: 900;
  font-style: italic;
  margin-bottom: 5px;
`;

const TagsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  font-style: italic;
  font-size: 1.2em;
`;
const TagsWrap = styled.div`
  margin: 3px;
  font-weight: 700;
  font-size: 0.9em;
  border: 2px solid #000;
  padding: 5px 8px;
  letter-spacing: -0.5px;
  text-align: right;

  @media screen and (max-width: 650px) {
    text-align: center;
  }
`;

const BtnWrap = styled.div`
  width: fit-content;
  margin-top: 25px;
  display: none;

  @media screen and (max-width: 975px) {
    display: block;
  }
`;

const ProjectsComp = ({
  title,
  description,
  slug,
  index,
  url,
  projectTags,
  alt,
}) => {
  const [isHover, setIsHover] = useState(false);

  const imgAnimation = useAnimation();

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 3;
    imgAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor,
    });
  };

  console.log(url);

  return (
    <Link href={`/projects/${slug}`} passHref>
      <ProjectContainer
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <ImageOverlay isHover={isHover}>
          <OverlayImage
            as={motion.img}
            animate={imgAnimation}
            onMouseMove={(e) => handleMouseMove(e)}
            src={url}
            alt={alt}
          />
        </ImageOverlay>
        <ColLeft>
          <IndexWrap>
            {" "}
            <IndexText>{index + 1}</IndexText>{" "}
          </IndexWrap>
        </ColLeft>
        <ColRight>
          <ProjectTitle isHover={isHover}>{title}</ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>``
          <ServicesHeading>Services</ServicesHeading>
          <TagsContainer>
            {projectTags.map((tag, idx) => (
              <TagsWrap>{tag.projectTag}</TagsWrap>
            ))}
          </TagsContainer>
          <BtnWrap>
            <ViewWebsite
              text="View Project"
              href={`/projects/${slug}`}
              black={true}
            />
          </BtnWrap>
        </ColRight>
      </ProjectContainer>
    </Link>
  );
};

export default ProjectsComp;
