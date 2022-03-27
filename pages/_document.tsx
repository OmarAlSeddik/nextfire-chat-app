// -- next -- //
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* metadata */}
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#1a237e" /> {/* PICK YOUR COLOR! */}
          {/* favicons */}
          {/* FAVICON LINKS GO HERE! */}
          {/* fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* THE ROBOTO FONT IS REQUIRED BY MATERIAL UI! */}
          {/* OTHER FONTS GO HERE! */}
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
