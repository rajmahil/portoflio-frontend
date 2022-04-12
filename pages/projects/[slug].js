import { useState, useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import styled from "styled-components";
import Contact from "../../Components/Contact";
import ViewWebsite from "../../Components/Custom/ViewWebsite";
import ProjectButton from "../../Components/Custom/ProjectButton";
import LoadingScreen from "../../Components/LoadingScreen";
import MarkdownIt from "markdown-it";
import Head from "next/head";

const ProjectHeading = styled.h1`
  font-size: 6em;
  color: #fff;
  margin: 0px;
  font-family: degular-display, sans-serif;
  margin-right: auto;
  line-height: 100px;

  @media screen and (max-width: 900px) {
    font-size: 5em;
    margin-top: 100px;
    line-height: 75px;
  }
  @media screen and (max-width: 600px) {
    font-size: 4em;
  }
`;
const HeaderLabel = styled.div`
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 20px;
`;
const HeadingWrap = styled.div`
  width: auto;
  max-width: 1000px;
  margin-right: auto;
  width: 100%;
  text-align: left;
  margin-bottom: 40px;
`;
const HeaderContentWrap = styled.div`
  width: 100%;
  margin-right: auto;
  max-width: 1600px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;
const HeaderDescriptionWrap = styled.div`
  width: 40%;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;
const HeaderDescription = styled.p`
  font-size: 1.1em;
  color: #fff;
  font-weight: 300;
  margin: 0px;
  padding: 0px;
  line-height: 30px;
`;
const ProjectTags = styled.div`
  border: 1px solid #fff;
  margin: 5px 0px;
  padding: 10px;
  font-style: italic;
`;
const MainContentWrap = styled.main`
  width: auto;
  max-width: 1400px;
  cursor: default;
  margin-left: auto;
  margin-right: auto;
`;
const ContentWrap = styled.article`
  padding: 90px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 900px) {
    padding: 12px;
  }
`;

const LongDescription = styled.p`
  margin-right: auto;
  margin-left: auto;
  font-weight: 400;
  font-size: 1.15em;
  font-style: italic;
  line-height: 40px;

  @media screen and (max-width: 900px) {
    padding: 45px;
  }
  @media screen and (max-width: 500px) {
    padding: 20px;
    font-size: 1em;
  }
`;

const PhotoGrid = styled.div`
  width: 48%;
  height: auto;
  margin: 10px;

  @media screen and (max-width: 1375px) {
    width: 47%;
    height: auto;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const ProjectHeader = styled.header`
  background: ${({ projectBackground }) => projectBackground || "#000"};
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 200px;
  color: #fff;

  @media screen and (max-width: 1190px) {
    padding: 0px 60px;
  }
  @media screen and (max-width: 900px) {
    height: auto;
  }

  @media screen and (max-width: 600px) {
    height: auto;
    padding: 0px 24px;
  }
`;

const GridImages = styled.img`
  width: 100%;
  height: auto;
`;

const ProjectDetails = ({ project }) => {
  const { loading, error, data } = useFetch(
    "https://portfolio-backend-raj-mahil.herokuapp.com/projects"
  );

  const [index, setIndex] = useState();

  // const md = new MarkdownIt({
  //   html: true,
  // });
  // const htmlContent = md.render((project?.projectLongDescription).toString());

  useEffect(() => {
    const getIndex = () =>
      data?.findIndex((element, index) => {
        if (element.id === project?.id) {
          setIndex(index);
        }
      });
    getIndex();
  }, [data, index]);

  if (loading) return <LoadingScreen />;
  if (error) return <p>Error! :(</p>;
  return (
    <>
      <Head>
        <title>{project?.titleTag}</title>
        <meta name="description" content={project?.metaDescription}></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={project?.titleTag} />
        <meta
          property="og:url"
          content={`http://localhost:3000/projects/${project?.slug}`}
        />
        <meta property="og:description" content={project?.metaDescription} />
        <meta
          property="og:image"
          content={`https://portfolio-backend-raj-mahil.herokuapp.com${project?.projectImage.url}`}
        />
        <meta property="og:type" content="article" />
      </Head>
      <ProjectHeader projectBackground={project?.backgroundColor}>
        <HeadingWrap>
          <ProjectHeading>{project?.title}</ProjectHeading>
        </HeadingWrap>
        <HeaderContentWrap>
          <HeaderDescriptionWrap>
            <HeaderLabel>Information</HeaderLabel>
            <HeaderDescription>
              {project?.projectShortDescription}
            </HeaderDescription>
            <ViewWebsite text="View Website" href={project?.projectLink} />
          </HeaderDescriptionWrap>
          <HeaderDescriptionWrap>
            <HeaderLabel>Services</HeaderLabel>
            {project.project_tags.map((tag, index) => (
              <>
                <ProjectTags>{tag?.projectTag}</ProjectTags>
              </>
            ))}
          </HeaderDescriptionWrap>
        </HeaderContentWrap>
      </ProjectHeader>
      <MainContentWrap>
        <ContentWrap style={{ paddingBottom: "0px" }}>
          {/* <LongDescription dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
          <LongDescription>{project?.projectLongDescription}</LongDescription>
        </ContentWrap>
        <ContentWrap>
          {project.projectImages.map((image, index) => (
            <>
              <PhotoGrid>
                <GridImages
                  src={`https://portfolio-backend-raj-mahil.herokuapp.com${image.url}`}
                />
              </PhotoGrid>
            </>
          ))}
        </ContentWrap>
        <ContentWrap
          style={{
            justifyContent: "center",
            textDecoration: "none !important",
          }}
        >
          <ProjectButton
            text={
              typeof data[index + 1]?.title === "undefined"
                ? `View All Projects`
                : `Next: ${data[index + 1]?.title}`
            }
            href={
              typeof data[index + 1]?.title === "undefined"
                ? `/projects`
                : `/projects/${data[index + 1].slug}`
            }
          />
        </ContentWrap>
      </MainContentWrap>
      <Contact />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://portfolio-backend-raj-mahil.herokuapp.com/projects/"
  );
  const projects = await res.json();

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

//gets data for individual pages

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(
    `https://portfolio-backend-raj-mahil.herokuapp.com/projects?slug=${slug}`
  );
  const data = await res.json();
  const project = data[0];

  return {
    props: {
      project,
    },
  };
}

export default ProjectDetails;
