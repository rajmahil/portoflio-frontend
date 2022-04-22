import React from "react";
import styled from "styled-components";
import BlogAuthor from "../../Components/BlogAuthor";
import MarkdownIt from "markdown-it";
import OtherBlogs from "../../Components/OtherBlogs";
import Head from "next/head";

const BlogHeaderOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const BlogMainHeading = styled.h1`
  font-family: degular-display, sans-serif !important;
  color: #fff;
  font-size: 4.2em;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  margin-bottom: 0px;
  margin-top: 0px;
  text-align: center;

  @media screen and (max-width: 950px) {
    font-size: 3.8em;
  }
`;
const BlogPublishDate = styled.div`
  color: #fff;
  font-style: italic;
  font-size: 1.4em;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 950px) {
    font-size: 1.2em;
  }
`;

const BlogPageWrap = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;
  padding: 90px;
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

const BlogPageContent = styled.div`
  width: auto;
`;

const BlogPosts = ({ post }) => {
  const BlogHeaderImage = styled.div`
    background: ${`url(${post?.BlogBackgroundImage.url})`};
    background-size: cover;
    background-position: center;
    height: 600px;
  `;
  // const md = new MarkdownIt({
  //   html: true,
  // });

  // const htmlContent = md.render((post?.blogContent).toString());

  // console.log(post);

  return (
    <>
      <Head>
        <title>{post?.titleTag}</title>
        <meta name="description" content={post?.metaDescription}></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={post?.titleTag} />
        <meta property="og:url" content={`www.rajmahil.ca/${post?.slug}`} />
        <meta property="og:description" content={post?.metaDescription} />
        <meta property="og:image" content={post?.blogMainImage[0].url} />
        <meta property="og:type" content="article" />
      </Head>
      <div id="top" style={{ cursor: "default", backgound: "#f9f9f9" }}>
        <BlogHeaderImage>
          <BlogHeaderOverlay>
            <BlogMainHeading>{post?.blogHeading}</BlogMainHeading>
            <BlogPublishDate>{`Published on: ${post?.blogPublishDate}`}</BlogPublishDate>
            <BlogAuthor
              imageUrl={post?.author?.authorsImage.url}
              altText={post?.author?.authorsImage.alternativeText}
              authorName={post?.author?.fullName}
              authorsJobTitle={post?.author?.authorsJobTitle}
            />
          </BlogHeaderOverlay>
        </BlogHeaderImage>
        <BlogPageWrap>
          {/* <BlogPageContent dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
          <BlogPageContent>{post?.blogContent}</BlogPageContent>
          <OtherBlogs />
        </BlogPageWrap>
      </div>
    </>
  );
};

//tells NEXT how many pages there are
export async function getStaticPaths() {
  const res = await fetch(
    "https://floating-hollows-19339.herokuapp.com/blogs/"
  );
  const posts = await res.json();

  const paths = posts?.map((post) => ({
    params: { slug: post.slug },
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
    `https://floating-hollows-19339.herokuapp.com/blogs?slug=${slug}`
  );
  const data = await res.json();
  const post = data[0];

  return {
    props: {
      post,
    },
  };
}

export default BlogPosts;
