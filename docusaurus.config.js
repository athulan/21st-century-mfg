// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Industry 4.0 and Smart Manufacturing',
  tagline: 'Evolution of Manufacturing Technology: Machines, Processes, Systems',
  url: 'http://course.athulan.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'athulan', // Usually your GitHub org/user name.
  projectName: '21st-century-mfg', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      navbar: {
        title: 'Industry 4.0 and Smart Manufacturing',
        logo: {
          alt: 'Amazing Logo Here',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Course',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/athulan/21st-century-mfg',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Lectures',
                to: '/docs/lectures/lecture-01',
              },
              {
                label: 'Assignments',
                to: '/docs/assignments/assignment-01'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/athulan/21st-century-mfg/',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Athulan Vijayaraghavan, Chennai, India`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
