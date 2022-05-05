import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="og:locale" content="en_us" />
          <link
            rel="icon"
            type="image/svg"
            href="https://floating-hollows-19339.herokuapp.com/uploads/SVG_Icon_ffb054b289.svg"
          ></link>
          <link rel="stylesheet" href="https://use.typekit.net/vha4vpu.css" />
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
