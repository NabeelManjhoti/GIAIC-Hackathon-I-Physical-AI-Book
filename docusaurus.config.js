// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A Comprehensive Guide to Embodied Intelligence and Robotic Systems',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Add trailingSlash to fix GitHub Pages deployment warning
  trailingSlash: true,

  // Set the production url of your site here
  url: 'https://NabeelManjhoti.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/GIAIC-Hackathon-I-Physical-AI-Book',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NabeelManjhoti', // Usually your GitHub org/user name.
  projectName: 'GIAIC-Hackathon-I-Physical-AI-Book', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: '/', // Serve docs at the site's root
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'AI Robotics Logo',
          src: 'img/ai-robotics-logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction-embodied-intelligence',
            position: 'left',
            label: 'Textbook',
          },
          {
            href: 'https://github.com/NabeelManjhoti/GIAIC-Hackathon-I-Physical-AI-Book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Textbook',
            items: [
              {
                label: 'About the Author',
                to: '/author-intro',
              },
              {
                label: 'Introduction to Embodied Intelligence',
                to: '/introduction-embodied-intelligence',
              },
              {
                label: 'ROS 2 Basics',
                to: '/ros2-basics',
              },
              {
                label: 'NVIDIA Isaac Sim',
                to: '/nvidia-isaac-gym',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'ROS 2 Documentation',
                href: 'https://docs.ros.org/en/rolling/',
              },
              {
                label: 'NVIDIA Isaac Sim',
                href: 'https://developer.nvidia.com/isaac-sim',
              },
              {
                label: 'Python Robotics',
                href: 'https://pypi.org/project/PythonRobotics/',
              },
              {
                label: 'OpenAI Gym',
                href: 'https://gym.openai.com/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Robotics Stack Exchange',
                href: 'https://robotics.stackexchange.com/',
              },
              {
                label: 'AI Stack Exchange',
                href: 'https://ai.stackexchange.com/',
              },
              {
                label: 'ROS Discourse',
                href: 'https://discourse.ros.org/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
