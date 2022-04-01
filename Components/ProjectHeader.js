import styled from "styled-components";

const HeaderWrap = styled.div`
  width: 100%;
  height: 500px;
  background-position: center;
  background-size: cover;
`;
const HeaderOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
`;

const ProjectHeader = ({ image }) => {
  return (
    <HeaderWrap style={{ backgroundImage: `url(${image})` }}>
      <HeaderOverlay></HeaderOverlay>
    </HeaderWrap>
  );
};

export default ProjectHeader;
