import Nav from "./Nav";
import Head from "next/head";
import { useState } from "react";
import Sidebar from "./Sidebar";
import CallToAction from "./CallToAction";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./Footer";
import Contact from "./Contact.js";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/vha4vpu.css" />
      </Head>
      <Nav toggle={toggle} isOpen={isOpen} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <div>
        <main>{children}</main>
        {typeof window != "undefined" && (
          <AnimatedCursor
            innerSize={15}
            outerSize={35}
            color="255,255,255"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
          />
        )}
      </div>
      <CallToAction />
      <Footer />
    </>
  );
};

export default Layout;
