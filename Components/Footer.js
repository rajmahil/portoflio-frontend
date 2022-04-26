import styled, { keyframes } from "styled-components";
import circleText from "../public/Images/circleText.png";
import footerCircleImage from "../public/Images/footerCircleImage.png";
import Image from "next/image";
import rajMahilFooterLogo from "../public/Images/rajMahilFooterLogo.png";

const FooterWrap = styled.footer`
  width: auto;
  height: 80vh;
  background: #000;
  padding-top: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  @media screen and (max-width: 515px) {
    height: 100vh;
    padding-top: 20px;
  }
`;
const FooterContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  background: #ff3e05;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1000vw 1000vw 0 0;
  height: 100%;
`;

const CopyrightText = styled.p`
  font-family: lato, serif;
  font-style: italic;
  letter-spacing: -0.5px;
  font-size: 1.4em;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  margin: 0px 8px;

  @media screen and (max-width: 1350px) {
    font-size: 1.2em;
  }

  @media screen and (max-width: 1175px) {
    font-size: 1em;
  }

  @media screen and (max-width: 750px) {
    text-align: center;
  }
`;

const IconWrap = styled.div`
  width: auto;
  font-size: 1.8em;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const FooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding-top: 15px;
  border-top: 3px solid #000;

  @media screen and (max-width: 975px) {
    flex-wrap: wrap;
    border-top: none;
    flex-direction: column-reverse;
  }
`;

const FooterCols = styled.div`
  width: 25%;
  border-right: 3px solid #000;
  display: flex;
  justify-content: center;
  padding: 5px 0px;

  @media screen and (max-width: 975px) {
    width: 100%;
    border-right: none;
  }
`;

const CircleImageWrap = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CircleKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }


 
`;

const CircleImage = styled.img`
  width: 500px;
  animation: rotation 15s infinite linear;
  animation-name: ${CircleKeyframe};
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;

  @media screen and (max-width: 1120px) {
    width: 420px;
  }
  @media screen and (max-width: 500px) {
    width: 400px;
  }
  @media screen and (max-width: 400px) {
    width: 350px;
  }
`;

const FooterImageWrap = styled.img`
  width: 330px;
  margin-top: auto;
  margin-bottom: auto;

  @media screen and (max-width: 1120px) {
    width: 280px;
  }
  @media screen and (max-width: 500px) {
    width: 250px;
  }
  @media screen and (max-width: 400px) {
    width: 200px;
  }
`;

const ImageWrap = styled.div`
  width: 200px;
`;

const Footer = () => {
  const currentTime = new Date();

  return (
    <FooterWrap>
      <FooterContainer>
        <CircleImageWrap>
          <CircleImage src={circleText.src} />
          <FooterImageWrap src={footerCircleImage.src} />
        </CircleImageWrap>
        <FooterContent>
          <FooterCols>
            <CopyrightText>
              Copyright Raj Mahil {currentTime.getFullYear()}
            </CopyrightText>
          </FooterCols>
          <FooterCols>
            <CopyrightText>Instagram</CopyrightText>
            <CopyrightText>Twitter</CopyrightText>
          </FooterCols>
          <FooterCols>
            <CopyrightText>Privacy</CopyrightText>
            <CopyrightText>Terms & Conditions</CopyrightText>
          </FooterCols>
          <FooterCols style={{ borderRight: "none" }}>
            <ImageWrap>
              <Image
                src={rajMahilFooterLogo}
                alt="Raj Mahil Logo, Web designer in Saskatoon, SK"
              />
            </ImageWrap>
          </FooterCols>
        </FooterContent>
      </FooterContainer>
    </FooterWrap>
  );
};

export default Footer;
