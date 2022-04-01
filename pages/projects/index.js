import styled from "styled-components";
import useFetch from "../../Hooks/useFetch";
import Image from "next/image";
import ProjectButton from "../../Components/Custom/ProjectButton";
import ViewProject from "../../Components/Custom/ViewProject";
import LoadingScreen from "../../Components/LoadingScreen";
import projectsHeaderImage from "../../public/Images/projectsHeaderImage.png";
import ReadBlog from "../../Components/Custom/ReadBlog";
import Head from "next/head";
import { motion } from "framer-motion";

const PageHeader = styled.div`
  width: 100%;
  height: 100vh;
  background: ${`url(${projectsHeaderImage.src})`};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 1100px) {
    height: 100vh;
  }
`;
const PageWrap = styled.div`
  width: auto;
  background: #f7f7f7;
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PageHeading = styled.h1`
  font-family: degular-display, sans-serif;
  color: #fff;
  font-size: 6em;
  text-align: center;
  margin-top: auto;
  margin-bottom: 0px;
  line-height: 100px;
  margin-bottom: 20px;

  @media screen and (max-width: 1100px) {
    font-size: 4.2em;
    line-height: 75px;
  }
  @media screen and (max-width: 600px) {
    font-size: 3em;
    line-height: 60px;
  }

  @media screen and (max-width: 450px) {
    font-size: 2.6em;
  }
`;
const PageParagraph = styled.p`
  width: auto;
  color: #fff;
  line-height: 50px;
  font-size: 1.6em;
  font-weight: 500;
  font-style: italic;
  margin: 0px;
  text-align: center;
  max-width: 1000px;

  @media screen and (max-width: 1100px) {
    font-size: 1.4em;
    line-height: 45px;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.2em;
    line-height: 35px;
  }
`;

const PageSpan = styled.span`
  font-family: ivypresto-display, serif;
  color: #ff3e05;
`;
const PageContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 25px;

  @media screen and (max-width: 450px) {
    padding: 0px 12px;
  }
`;
const PageContentWrap = styled.div`
  max-width: 1220px;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 90px 0px;
  cursor: default;

  @media screen and (max-width: 550px) {
    padding: 90px 12px;
    width: auto;
  }
`;
const ProjectContainer = styled.div`
  width: 45%;
  display: flex;
  margin-bottom: 65px;
  color: #000;

  @media screen and (max-width: 1300px) {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 1060%;
  }
`;

const ProjectHeading = styled.h2`
  font-size: 3em;
  font-family: degular-display, sans-serif;
  margin-bottom: 0px;
  margin-top: 0px;

  @media screen and (max-width: 600px) {
    font-size: 2.4em;
  }
`;
const ProjectDescription = styled.p`
  font-size: 1em;
  font-weight: 300;
  color: #000;
  line-height: 30px;
  margin-top: 5px;
  margin-bottom: 20px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
const ProjectsWrap = styled.div`
  width: 100%;
`;
const ProjectsCtaWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const ImageWrap = styled.div`
  width: 100%;
  height: auto;
`;
const ProjectTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.img`
  width: 100%;
`;

const Projects = () => {
  const { loading, error, data } = useFetch("http://localhost:1337/projects");

  if (loading) return <LoadingScreen />;
  if (error) return <p>Error! :(</p>;

  console.log(data);
  return (
    <>
      <Head>
        <title>
          Raj Mahil Portfolio | Creative Web Developer & designer from Canada
        </title>
        <meta name="description" content="meta description"></meta>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="OG title" />
        <meta property="og:url" content="url" />
        <meta property="og:description" content="OG Description" />
        <meta property="og:image" content="OG eewImage" />
        <meta property="og:type" content="article" />
      </Head>
      <PageWrap>
        <PageHeader>
          <PageContainer>
            <PageHeading
              as={motion.h1}
              initial={{
                y: -150,
                opacity: 0,
                transition: { ease: "easeOut", duration: 0.8 },
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { ease: "easeOut", duration: 0.8, delay: 0.2 },
              }}
            >
              <PageSpan> Creative Projects</PageSpan> that leave a positive
              impact on our future
            </PageHeading>
            <PageParagraph
              as={motion.p}
              initial={{
                y: -150,
                opacity: 0,
                transition: { ease: "easeOut", duration: 0.8 },
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { ease: "easeOut", duration: 0.8, delay: 0.0 },
              }}
            >
              Over the years, I have worked with businesses from diverse
              industries to create memorable web experiences that leave a
              lasting positive impact. Below are projects that I have worked on
              recently. Enjoy!
            </PageParagraph>
          </PageContainer>
        </PageHeader>
        <PageContentWrap>
          {data?.map((project, index) => (
            <ProjectContainer key={project.id}>
              <ProjectsWrap>
                <ImageWrap
                // style={{
                //   background: `url(http://localhost:1337${project.projectImage.url})`,
                //   backgroundSize: "cover",
                //   backgroundPosition: "center",
                // }}
                >
                  <ProjectImage
                    src={`http://localhost:1337${project.projectImage.url}`}
                  />
                </ImageWrap>
                <ProjectsCtaWrap>
                  <ProjectTextWrap>
                    <ProjectHeading>{project.title}</ProjectHeading>
                    <ProjectDescription>
                      {project.projectShortDescription}
                    </ProjectDescription>
                  </ProjectTextWrap>
                </ProjectsCtaWrap>
                <ReadBlog
                  text="View Project"
                  href={`/projects/${project.slug}`}
                />
              </ProjectsWrap>
            </ProjectContainer>
          ))}
        </PageContentWrap>
      </PageWrap>
    </>
  );
};

export default Projects;
