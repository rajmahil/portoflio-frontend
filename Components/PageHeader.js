import Image from "next/image";
import styled from "styled-components";

const PageHeaderWrap = styled.div`
  width: auto;
  height: 50vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageHeading = styled.h1`
  font-size: 4em;
  color: #fff;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

const PageHeader = ({ image, text }) => {
  return (
    <>
      <PageHeaderWrap style={{ background: `url(${image.src})` }}>
        <PageHeading>{text}</PageHeading>
      </PageHeaderWrap>
    </>
  );
};

export default PageHeader;
