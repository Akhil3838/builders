import Script from "next/script";
import "./globals.css";



export const metadata = {
  title: "Cherupuzha Builders - Construction Website",
  description: "Cherupuzha Builders - Construction Website",
  keywords: [
    "construction",
    "architect",
    "building",
    "company",
    "web design",
    "html template",
    "bootstrap",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="shortcut icon" href="/images/favicon.png" />

        {/* Bootstrap */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />

        {/* Animate */}
        <link rel="stylesheet" href="/css/animate.css" />

        {/* Owl Carousel */}
        <link rel="stylesheet" href="/css/owl.carousel.css" />

        {/* FontAwesome */}
        <link rel="stylesheet" href="/css/font-awesome.css" />

        {/* Themify */}
        <link rel="stylesheet" href="/css/themify-icons.css" />

        {/* Flaticon */}
        <link rel="stylesheet" href="/css/flaticon.css" />

        {/* Fontello */}
        <link rel="stylesheet" href="/css/fontello.css" />

        {/* Revolution Slider */}
        <link rel="stylesheet" href="/revolution/css/layers.css" />
        <link rel="stylesheet" href="/revolution/css/settings.css" />

        {/* PrettyPhoto */}
        <link rel="stylesheet" href="/css/prettyPhoto.css" />

        {/* Shortcodes */}
        <link rel="stylesheet" href="/css/shortcodes.css" />

        {/* Main */}
        <link rel="stylesheet" href="/css/main.css" />

        {/* Color Switcher */}
        <link rel="stylesheet" href="/css/color-switcher.css" />

        {/* Color Theme */}
        <link
          id="switcher-color"
          href="/css/colors/default-color.css"
          rel="stylesheet"
        />

        {/* Responsive */}
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>

      <body>
        {children}

        {/* jQuery */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery-migrate-3.4.1.min.js" strategy="beforeInteractive" />

        {/* Bootstrap + Plugins */}
        <Script src="/js/tether.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/color-switcher.js" strategy="afterInteractive" />
        <Script src="/js/jquery.easing.js" strategy="afterInteractive" />
        <Script src="/js/jquery-waypoints.js" strategy="afterInteractive" />
        <Script src="/js/jquery-validate.js" strategy="afterInteractive" />
        <Script src="/js/owl.carousel.js" strategy="afterInteractive" />
        <Script src="/js/jquery.prettyPhoto.js" strategy="afterInteractive" />
        <Script src="/js/numinate.min6959.js?ver=4.9.3" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />

        {/* Revolution Slider */}
        <Script src="/revolution/js/jquery.themepunch.tools.min.js" strategy="afterInteractive" />
        <Script src="/revolution/js/jquery.themepunch.revolution.min.js" strategy="afterInteractive" />
        <Script src="/revolution/js/slider.js" strategy="afterInteractive" />

        {/* Revolution Extensions */}
        <Script src="/revolution/js/extensions/revolution.extension.actions.min.js" strategy="afterInteractive" />
        <Script src="/revolution/js/extensions/revolution.extension.carousel.min.js" strategy="afterInteractive" />
        <Script src="/revolution/js/extensions/revolution.extension.kenburn.min.js" strategy="afterInteractive" />
        <Script src="/revolution/js/extensions/revolution.extension.layeranimation.min.js" strategy="afterInteractive" />
        <Script src="/revolution/js/extensions/revolution.extension.migration.min.js" strategy="afterInteractive" />
        <Script src="/revolution/js/extensions/revolution.extension.navigation.min.js" strategy="afterInteractive" />
        <Script src="/revolution/js/extensions/revolution.extension.parallax.min.js" strategy="afterInteractive" />
        <Script src="/revolution/js/extensions/revolution.extension.slideanims.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
