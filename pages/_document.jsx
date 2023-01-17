import { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const Document = (props) => {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        {props.styleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export const getInitialProps = ({ renderPage }) => {
  const sheet = new ServerStyleSheet();
  const page = renderPage(
    (App) => (props) => sheet.collectStyles(<App {...props} />)
  );
  const styleTags = sheet.getStyleElement();
  return { ...page, styleTags };
};

export default Document;
