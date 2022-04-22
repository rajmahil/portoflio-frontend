import React from "react";
import useFetch from "../Hooks/useFetch.js";
import LoadingScreen from "./LoadingScreen.js";
import styled from "styled-components";
import ReadBlog from "./Custom/ReadBlog.js";

const OtherBlogsHeading = styled.h2`
  margin-top: 50px;
  font-family: "Roboto", sans-serif;
  font-size: 4em;
  text-align: center;
`;

const OtherBlogsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const BlogContentWrap = styled.div`
  width: 30%;
  margin: 20px 0px;

  @media screen and (max-width: 1250px) {
    width: 48%;
  }
  @media screen and (max-width: 675px) {
    width: 100%;

    margin-left: auto;
    margin-right: auto;
  }
`;

const BlogImageWrap = styled.div`
  width: auto;
  overflow: hidden;
  height: 325px;
  background-size: cover !important;
  background-position: center !important;

  @media screen and (max-width: 1250px) {
    height: 300px;
  }
`;

const BlogName = styled.h3`
  font-size: 1.6em;
  line-height: 45px;
  margin-bottom: 5px;
`;

const BlogDescription = styled.div`
  font-size: 0.8em;
  color: grey;
  line-height: 30px;
  margin-bottom: 20px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const OtherBlogs = () => {
  const { loading, error, data } = useFetch(
    "https://floating-hollows-19339.herokuapp.com/blogs"
  );

  if (loading) return <LoadingScreen />;
  if (error) return <p>Error! :(</p>;

  return (
    <>
      <OtherBlogsHeading>Other Blogs</OtherBlogsHeading>
      <OtherBlogsWrap>
        {data.slice(0, 3).map((blog, index) => (
          <BlogContentWrap key={blog.id}>
            <BlogImageWrap
              style={{
                background: `url(${blog.blogMainImage[0].url})`,
              }}
            />
            <BlogName>{blog.blogHeading}</BlogName>
            <BlogDescription>{blog.blogDescription}</BlogDescription>
            <ReadBlog text="Read Blog" href={`/posts/${blog.slug}#top`} />
          </BlogContentWrap>
        ))}
      </OtherBlogsWrap>
    </>
  );
};

export default OtherBlogs;
