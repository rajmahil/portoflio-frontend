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
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dmcsstcqf/image/upload/v1651693218/PortfolioOgImage_s0hwd6.png"
          />
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
