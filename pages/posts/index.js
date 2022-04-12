import React from "react";
import styled from "styled-components";
import useFetch from "../../Hooks/useFetch";
import LoadingScreen from "../../Components/LoadingScreen.js";
import blogHeaderImage from "../../public/Images/blogHeaderImage.png";
import Link from "next/link";
import ReadBlog from "../../Components/Custom/ReadBlog";
import Head from "next/head";
import { motion } from "framer-motion";

const PageHeader = styled.div`
  width: 100%;
  height: 100vh;
  background: ${`url(${blogHeaderImage.src})`};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 1100px) {
    height: 100vh;
  }
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

const PageContentWrap = styled.div`
  background: #f9f9f9f9;
  cursor: default;
`;

const BlogWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1420px;
  margin-left: auto;
  margin-right: auto;
  padding: 90px;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    padding: 16px;
  }
`;

const BlogContainer = styled.div`
  width: 42%;
  margin: 35px;

  @media screen and (max-width: 1390px) {
    width: 45%;
    margin: 20px;
  }

  @media screen and (max-width: 980px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 775px) {
    width: 100%;
  }
`;
const BlogImageWrap = styled.div`
  height: 550px;
  width: 100%;
  background-size: cover !important;
  background-position: center !important;

  @media screen and (max-width: 1390px) {
    height: 450px;
  }

  @media screen and (max-width: 600px) {
    height: 400px;
  }

  @media screen and (max-width: 390px) {
    height: 380px;
  }
`;

const BlogHeading = styled.h2`
  font-size: 3em;
  font-family: degular-display, sans-serif;
  margin-bottom: 0px;
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    font-size: 2.4em;
  }
`;

const BlogParagraph = styled.p`
  font-family: lato, sans-serif;
  font-weight: 300;
  margin-top: 5px;
  font-style: italic;
`;

const Blog = () => {
  const { loading, error, data } = useFetch("http://localhost:1337/blogs");

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
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="OG title" />
        <meta property="og:url" content="url" />
        <meta property="og:description" content="OG Description" />
        <meta property="og:image" content="OGxxx Image" />
        <meta property="og:type" content="article" />
      </Head>
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
            <PageSpan> This is the page</PageSpan> heading. I`&apos;`m suppose
            to do write something.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            ultrices nisl. Nullam iaculis augue et erat congue rutrum. Aliquam
            convallis neque eget tortor ultrices semper et eget risus.
            Vestibulum at lectus.
          </PageParagraph>
        </PageContainer>
      </PageHeader>
      <PageContentWrap>
        <BlogWrap>
          {data.map((posts, index) => (
            <BlogContainer key={index}>
              <BlogImageWrap
                style={{
                  background: `url(http://localhost:1337${posts.blogMainImage[0].url})`,
                }}
              />
              <BlogHeading>{posts.blogHeading}</BlogHeading>
              <BlogParagraph>{posts.blogDescription}</BlogParagraph>
              <ReadBlog href={`/posts/${posts.slug}#top`} text="Read Blog" />
            </BlogContainer>
          ))}
        </BlogWrap>
      </PageContentWrap>
    </>
  );
};

export default Blog;