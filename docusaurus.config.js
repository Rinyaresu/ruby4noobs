// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ruby4noobs",
  tagline: "ruby4noobs - He4rt Developers",
  favicon: "img/favicon2.ico",

  // Set the production url of your site here
  url: "https://rinyaresu.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/ruby4noobs",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "He4rt", // Usually your GitHub org/user name.
  projectName: "ruby4noobs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Ruby4noobs",
        logo: {
          alt: "My Site Logo",
          src: "img/ruby.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          {
            href: "https://github.com/rinyaresu/ruby4noobs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/",
              },
            ],
          },
          {
            title: "Comunidade",
            items: [
              {
                label: "Heartdevs",
                href: "https://heartdevs.com/",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/5kwDQuv",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/He4rtDevs",
              },
            ],
          },
          {
            title: "Pessoal",
            items: [
              {
                label: "Blog",
                to: "https://blog-rinyaresu.vercel.app/",
              },
              {
                label: "Meu GitHub",
                href: "https://github.com/rinyaresu",
              },
            ],
          },
        ],
      },
      prism: {
        additionalLanguages: ["ruby"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
