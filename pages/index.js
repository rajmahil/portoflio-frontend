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
        <title>
          Raj Mahil | Creative web designer and developer in Saskatoon, Canada
        </title>
        <meta
          name="description"
          content="Raj Mahil is a digital designer and web developer from Canada, passionate about creating memorable digital experiences. From eCommerce to mobile applications, Raj Mahil can help transform your vision into reality. Proudly operating from Saskatoon, SK, Canada."
        ></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Raj Mahil | Creative web designer and developer in Saskatoon, Canada"
        />
        <meta property="og:url" content="https://www.rajmahil.ca/" />
        <meta
          property="og:description"
          content="Raj Mahil is a digital designer and web developer from Canada, passionate about creating memorable digital experiences. From eCommerce to mobile applications, Raj Mahil can help transform your vision into reality. Proudly operating from Saskatoon, SK, Canada."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dmcsstcqf/image/upload/v1651693218/PortfolioOgImage_s0hwd6.png"
        />
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
