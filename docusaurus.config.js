// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Greenwood, South Carolina',
  tagline: 'An experimental AI web project',
  favicon: 'img/favicon.ico',
  url: 'https://greenwoodsc.net',
  baseUrl: '/',
  organizationName: 'greenwoodsc',
  projectName: 'greenwoodsc',
  deploymentBranch: 'main',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/greenwoodsc/thewood/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/greenwoodsc/thewood/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'announcement',
        content:
          'This website is a public data science experiment. You can learn more about it @ <a href="/docs/about">/docs/about</a>',
        backgroundColor: '#a00000',
        textColor: '#ffffff',
        isCloseable: false,
      },
      image: 'img/sc.png',
      navbar: {
        title: 'Greenwood, South Carolina',
        logo: {
          alt: 'Greenwood, South Carolina',
          src: 'img/sc.png',
        },
        items: [
          {to: '/index', label: 'Index', position: 'left'},
          {to: '/docs', label: 'Docs', position: 'right'},
          {to: '/dev', label: 'Dev', position: 'right'},
        ],
      },
      colormode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'light',
        copyright: `CC BY-NC-SA U+1F16E ${new Date().getFullYear()} `,
      },
      prism: {
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.vsDark,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dev',
        path: 'dev',
        routeBasePath: 'dev',
        sidebarPath: require.resolve('./sidebarsdev.js'),
        showLastUpdateTime: true,
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'index',
        path: 'index',
        routeBasePath: 'index',
        sidebarPath: require.resolve('./sidebarsindex.js'),
        showLastUpdateTime: true,
      }
    ],
  ],
};

export default config;
