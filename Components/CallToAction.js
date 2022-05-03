import styled from "styled-components";
import { RiMessage3Fill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";

const CtaWrap = styled.div`
  height: 170px;
  position: fixed;
  left: 0px;
  top: 40%;
  transform: rotate(180deg);
  background: #ff3e05;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.5px;
  font-size: 1em;
  margin: 0px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  color: #fff;
  z-index: 1000000;

  &:hover {
    transition: all 0.3s ease-in;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const CtaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CtaText = styled.p`
  font-size: 1.4em;
  font-weight: 700;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  margin-bottom: 10px;
`;
const IconWrap = styled.div`
  width: auto;
  font-size: 2.2em;
  transform: rotate(90deg);
`;
const CtaLine = styled.div`
  width: 6px;
  height: ${({ isHover }) => (isHover ? "100%" : "0%")};
  background: #fff;
  position: absolute;
  left: 0px;
  transition: all 0.3s ease-in;
`;

const CallToAction = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link href="/contact" passHref>
      <CtaWrap
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <CtaContainer>
          <IconWrap>
            <RiMessage3Fill />
          </IconWrap>
          <CtaText>Let's Talk</CtaText>
        </CtaContainer>
        <CtaLine isHover={isHover} />
      </CtaWrap>
    </Link>
  );
};

export default CallToAction;
