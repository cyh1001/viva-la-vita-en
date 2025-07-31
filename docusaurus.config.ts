import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Viva La Vida Knowledge Base',
  tagline: 'Community-driven educational resources and knowledge sharing platform',
  favicon: 'img/favicon.ico',

  url: 'https://your-new-domain.com',
  baseUrl: '/',

  organizationName: 'viva-la-vita',
  projectName: 'vivalavida-en',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/vivalavida/vivalavida-en/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/vivalavida/vivalavida-en/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Viva La Vida',
      logo: {
        alt: 'Viva La Vida Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Knowledge Base',
        },
        {
          href: 'https://viva-la-vita.org',
          label: 'Main Site',
          position: 'left',
        },
        {
          href: 'https://bbs.viva-la-vita.org',
          label: 'Forum',
          position: 'left',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/viva-la-vita',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Knowledge',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/vivalavida/vivalavida-en',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Licensed under CC BY-SA 4.0 • English translation of Viva La Vida Knowledge Base • Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;