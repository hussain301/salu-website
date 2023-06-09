import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Shah Abdul Latif University &#8211; Educating Sindh</title>
        <meta
          name="description"
          content="Shah Abdul Latif University (SALU) is a public university located in Khairpur, Sindh, Pakistan. It was established in 1993 by the Government of Sindh."
        />
        <meta
          name="keywords"
          content="Shah Abdul Latif University, Khairpur, Sindh, Pakistan, public university, higher education"
        />
        <meta name="author" content="Shah Abdul Latif University" />
        <meta name="date" content="2023-06-09" />
        <meta property="og:title" content="Shah Abdul Latif University" />
        <meta
          property="og:description"
          content="Shah Abdul Latif University (SALU) is a public university located in Khairpur, Sindh, Pakistan. It was established in 1993 by the Government of Sindh."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/" />
        <meta property="og:image" content="https://www.example.com/image.jpg" />
        <meta property="og:image:alt" content="Shah Abdul Latif University" />
        <meta property="og:site_name" content="Shah Abdul Latif University" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shah Abdul Latif University" />
        <meta
          name="twitter:description"
          content="Shah Abdul Latif University (SALU) is a public university located in Khairpur, Sindh, Pakistan. It was established in 1993 by the Government of Sindh."
        />

        <link rel="canonical" href="https://www.example.com/" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
