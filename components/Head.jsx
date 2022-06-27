import NextHead from "next/head";

const DOMAIN = `https://fylo.so`;
const description =
  "All your files in one secure location, accessible anywhere";
const image = `${DOMAIN}/favicon-32x32.png`;

export const Head = () => {
  return (
    <NextHead>
      <title>Fylo - Most Secure Cloud Storage</title>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <link rel="canonical" href={DOMAIN} />
    </NextHead>
  );
};
