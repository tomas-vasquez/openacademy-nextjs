import Document, { Head, Main, NextScript, Html } from "next/document";
import { siteMetadata } from "../../site.config";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={siteMetadata.language}>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.png" />
        </Head>
        <body id="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
