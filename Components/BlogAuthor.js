import React from "react";
import styled from "styled-components";

const AuthorWrap = styled.div`
  width: auto;
  margin-top: 20px;
  color: #000;
  display: flex;
  background: #fff;
  padding: 10px;
  border-radius: 25px;
`;

const ImageWrap = styled.div`
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const TextWrap = styled.div`
  display: block;
  margin-top: auto;
  margin-bottom: auto;
`;

const AuthorImage = styled.img`
  width: 85px;

  @media screen and (max-width: 500px) {
    width: 70px;
  }
`;

const AuthorName = styled.h3`
  font-size: 2em;
  font-weight: 800;
  font-style: italic;
  margin: 0px;
  line-height: 40px;

  @media screen and (max-width: 500px) {
    font-size: 1.8em;
    line-height: 32px;
  }
`;

const AuthorJobTitle = styled.div`
  font-size: 0.9em;
  margin-top: 0px;

  @media screen and (max-width: 500px) {
    font-size: 0.8em;
  }
`;

const BlogAuthor = ({ imageUrl, authorName, authorsJobTitle }) => {
  return (
    <AuthorWrap>
      <ImageWrap>
        <AuthorImage
          src={`https://floating-hollows-19339.herokuapp.com${imageUrl}`}
        />
      </ImageWrap>
      <TextWrap>
        <AuthorName>{authorName}</AuthorName>
        <AuthorJobTitle>{authorsJobTitle}</AuthorJobTitle>
      </TextWrap>
    </AuthorWrap>
  );
};

export default BlogAuthor;
