import { Html, Head, Main, NextScript } from "next/document";

// link any external files here (e.g. Google Fonts)
// body style is applied to the body tag
export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <link
          rel="shortcut icon"
          href="assets/images/favicon.png"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="assets/css/flaticon.min.css" />

        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700&family=Merriweather:wght@700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;600&family=Kumbh+Sans:wght@400;500;700&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link rel="stylesheet" href="assets/css/fontawesome-5.14.0.min.css" />
        {/* Bootstrap */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        {/* Magnific Popup */}
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        {/* Nice Select */}
        <link rel="stylesheet" href="assets/css/nice-select.min.css" />
        {/* Type Writer */}
        <link rel="stylesheet" href="assets/css/jquery.animatedheadline.css" />
        {/* Animate */}
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        {/* Slick */}
        <link rel="stylesheet" href="assets/css/slick.min.css" />
        {/* Main Style */}
        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
