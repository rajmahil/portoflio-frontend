import Link from "next/link";
import { useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import ProjectButton from "./Custom/ProjectButton";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ProjectsComp from "./ProjectsComp";

const TagsContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
  font-style: italic;
  font-size: 1.2em;
`;
const TagsWrap = styled.div`
  margin: 3px;
  font-weight: 700;
  font-size: 1.2em;
  letter-spacing: -0.5px;
  text-align: right;

  @media screen and (max-width: 650px) {
    text-align: center;
  }
`;
const SectionHeading = styled.h2`
  font-family: degular-display, sans-serif !important;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  font-size: 4.2em;
  margin-top: 0px;

  @media screen and (max-width: 650px) {
    text-align: center;
    font-size: 2.6em;
  }
`;
const SectionWrap = styled.div`
  max-width: 1420px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: relative;
  color: #000;
  width: 100%;
`;
const SectionParagraph = styled.p`
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.5rem;
  margin: 0;
  color: #7d7d7d;
  line-height: 24px;
  margin-bottom: 18px;
  letter-spacing: 0.5px;
`;
const ProjectsWrap = styled.div`
  width: 100%;
  margin-bottom: 90px;
  cursor: pointer;

  @media screen and (max-width: 1290px) {
    width: 100%;
  }
`;
const ProjectImageWrap = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;
const ProjectTextWrap = styled.div`
  width: auto;
  padding: 28px 0px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;
const ProjectImageZoom = styled.div`
  overflow: hidden;
  height: 700px;
  display: grid;
  place-items: center;

  @media screen and (max-width: 1290px) {
    height: auto;
  }
`;
const SectionHeadingThree = styled.h3`
  font-size: 3.2em;
  margin: 0;
  font-family: degular-display, sans-serif !important;
  font-weight: 800;
  text-transform: uppercase;

  @media screen and (max-width: 650px) {
    text-align: center;
    font-size: 2.8em;
  }
`;
const BackgroundCircle = styled.div`
  border-radius: 50%;
  width: 400px;
  height: 400px;
  background: #ff3e05;
  position: absolute;
  top: -200px;
  left: -200px;
  z-index: -1;
`;
const BtnWrap = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
`;

const ProjectImage = styled.img`
  width: 100%;
`;

const SectionContainer = styled.div`
  width: auto;
  padding: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  z-index: 1;
  position: relative;
  overflow: hidden;
  color: #000;

  @media screen and (max-width: 1375px) {
    padding: 45px;
  }

  @media screen and (max-width: 500px) {
    padding: 45px 16px;
  }
`;

const Projects = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const projectControl = useAnimation();
  const [isHover, setIsHover] = useState(false);
  //CMS Blog Fetch
  const { loading, error, data } = useFetch(
    "https://floating-hollows-19339.herokuapp.com/projects?featuredProject=true"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! :(</p>;

  console.log(data);
  if (inView) {
    controls.start({
      top: "-50%",
      left: "-50%",
      width: "200%",
      height: "200%",
      transition: { ease: "easeOut", duration: 0.8, delay: 1 },
    });
    projectControl.start({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.8, delay: 1 },
    });
  }

  return (
    <>
      <SectionContainer ref={ref}>
        <SectionHeading style={{ paddingBottom: "24px" }}>
          Featured Projects
        </SectionHeading>
        <BackgroundCircle as={motion.div} animate={controls} />
        <SectionWrap>
          {data.map((project, index) => (
            <ProjectsComp
              title={project.title}
              description={project.projectShortDescription}
              slug={project.slug}
              index={index}
              url={project.projectImage.url}
              projectTags={project.project_tags}
              alt={project.projectImage.alternativeText}
              key={index}
            />
          ))}
          <BtnWrap>
            <ProjectButton
              href="/projects"
              text="More Projects"
              white={false}
            />
          </BtnWrap>
        </SectionWrap>
      </SectionContainer>
    </>
  );
};

export default Projects;
