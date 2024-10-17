// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
require('dotenv').config();

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PearAI",
  tagline:
    "the open-source library for accelerating software development with language models",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://trypear.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL || '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "trypearai", // Usually your GitHub org/user name.
  projectName: "pearai", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: [["docusaurus-json-schema-plugin", {}]],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/trypear/pearai-documentation/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-M3JWW8N2XQ", // UPDATE THIS
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content:
            "open source, ai, vscode, intellij, jetbrains, developer tools, chatgpt, copilot, llm, ai code editor",
        },
      ],
      // Replace with your project's social card
      image: "img/og-image.png",
      navbar: {
        title: "PearAI",
        logo: {
          alt: "PearAI Logo",
          src: "img/logo.png",
          href: "https://trypear.ai",
          target: "_self",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Docs",
          },
          {
            to: "https://github.com/trypear/pearai-app",
            label: "GitHub",
            position: "right",
            className: "github-navbar",
          },
          {
            to: "https://discord.gg/7QMraJUsQt",
            label: "Discord",
            position: "right",
            className: "discord-navbar",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                to: "https://discord.gg/7QMraJUsQt",
              },
              {
                label: "GitHub",
                to: "https://github.com/trypear/pearai-app",
              },
            ],
          },
          {
            title: "Follow Us",
            items: [
              {
                label: "Twitter",
                to: "https://x.com/trypearai",
              },
              {
                label: "LinkedIn",
                to: "https://linkedin.com/company/trypearai",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PearAI Dev, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["json"],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: process.env.ALGOLIA_APP_ID,

        // Public API key: it is safe to commit it
        apiKey: process.env.ALGOLIA_API_KEY,

        indexName: process.env.ALGOLIA_INDEX_NAME,

        // Optional: see doc section below
        contextualSearch: true,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [],
      },
    ],
  ],
};

module.exports = config;
