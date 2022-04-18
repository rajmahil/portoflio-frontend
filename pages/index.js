import Head from "next/head";
import Link from "next/link";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import useFetch from "../Hooks/useFetch";
import About from "../Components/About";
import Contact from "../Components/Contact";
import VideoComp from "../Components/VideoComp";
import LoadingScreen from "../Components/LoadingScreen";

const Home = () => {
  const { loading, error, data } = useFetch(
    "https://floating-hollows-19339.herokuapp.com/projects"
  );

  if (loading) return <LoadingScreen />;
  if (error) return <p>Error! :(</p>;

  console.log(data);

  return (
    <>
      <Head>
        <title>Web Designer in Saskatoon, SK | Raj Mahil Portfolio</title>
        <meta name="description" content="meta description"></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Web Designer in Saskatoon, SK | Raj Mahil Portfolio"
        />
        <meta property="og:url" content="www.rajmahil.com" />
        <meta property="og:description" content="OG Description" />
        <meta property="og:image" content="OG Image" />
        <meta property="og:type" content="website" />
      </Head>
      <Hero />
      <About />
      <VideoComp />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
