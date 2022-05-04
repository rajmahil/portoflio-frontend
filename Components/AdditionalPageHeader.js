import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background: #000;
  color: #fff;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  font-weight: 800;
  letter-spacing: -0.5px;
  padding-top: 50px;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 2.6em;
  }
`;

const AdditionalPageHeader = ({ title }) => {
  return <HeaderContainer>{title}</HeaderContainer>;
};

export default AdditionalPageHeader;
