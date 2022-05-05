import Image from "next/image";
import { useEffect } from "react";
import LogoImages from "./LogoBannerImages";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  SectionHeading,
  LogoGridWrap,
  LogoImageWrap,
} from "../styles/GlobalStyles";

const LogoBanner = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const animation = useAnimation();

  useEffect(() => {
    inView
      ? animation.start({
          y: 0,
          opacity: 1,
          transition: { type: "easeOut", duration: "0.8" },
        })
      : animation.start({
          y: "-100px",
          opacity: 0,
          transition: { type: "easeOut", duration: "0.8", delay: "1" },
        });

    if (inView) {
      return;
    }
  }, [inView]);
  return (
    <div className="SectionContainer">
      <div style={{}}>
        <SectionHeading
          style={{ color: "#fff" }}
          ref={ref}
          as={motion.div}
          animate={animation}
        >
          Here are some of my clients.
        </SectionHeading>
      </div>
      <LogoGridWrap>
        {LogoImages.map((image, idx) => (
          <LogoImageWrap
            ref={ref}
            as={motion.div}
            animate={animation}
            key={idx}
          >
            <Image src={image} />
          </LogoImageWrap>
        ))}
      </LogoGridWrap>
    </div>
  );
};

export default LogoBanner;
