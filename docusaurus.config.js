// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Piscinette",
  tagline: "Il n'a que que les mojitos qui doivent être vert",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.svg",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/armandabric/piscinette/tree/main/",
        },
        pages: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Piscinette",
        logo: {
          alt: "Piscinette logo",
          src: "favicon.svg",
        },
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#5bbad5",
          },
          {
            tagName: "meta",
            rel: "application-name",
            content: "Piscinette",
          },
          {
            tagName: "meta",
            rel: "apple-mobile-web-app-title",
            content: "Piscinette",
          },
          {
            tagName: "link",
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
          {
            tagName: "link",
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/site.webmanifest",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(255, 255, 255)",
          },
        ],
      },
    ],
  ],
};

module.exports = config;
