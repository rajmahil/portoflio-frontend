import Layout from "../Components/Layout";
import "../styles/styles.css";
// import AnimatedCursor from "react-animated-cursor";

function MyApp({ Component, pageProps }) {
  return (
    <Layout style={{ padding: "0", margin: "0" }}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
