module.exports = {
  title: "Porter",
  tagline: "Kubernetes powered PaaS that runs in your own cloud.",
  url: "https://docs.porter.run",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://i.ibb.co/HnSk02f/ptr.png",
  organizationName: "porter-dev",
  projectName: "porter",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: false,
      title: "Porter Cloud Docs",
      logo: {
        alt: "Porter",
        src: "/img/logo.png",
        srcDark: "/img/logo.png",
        href: "https://porter.run",
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "default",
          label: "Porter Documentation",
        },
        {
          position: "right",
          label: "Dashboard",
          href: "https://dashboard.getporter.dev",
          className: "dashboard__link",
        },
      ],
    },
    footer: {
      logo: {
        alt: "Porter",
        src: "/img/logo.png",
        srcDark: "/img/logo.png",
      },
      links: [
        {
          title: "Company",
          items: [
            {
              label: "Homepage",
              to: "https://porter.run",
            },
            {
              label: "Careers",
              to: "https://www.workatastartup.com/companies/porter",
            },
            {
              label: "Blog",
              to: "https://blog.porter.run",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Dashboard",
              to: "https://dashboard.getporter.dev",
            },
            {
              label: "Documentation",
              to: "https://docs.porter.run",
            },
            {
              label: "Pricing",
              to: "https://porter.run/pricing",
            },
            {
              label: "Privacy Policy",
              to: "https://docs.porter.run/docs/privacy-policy",
            },
            {
              label: "Terms of Service",
              to: "https://docs.porter.run/docs/terms-of-service",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/porter-dev/porter",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/getporterdev",
            },
            {
              label: "Discord",
              href: "https://discord.gg/FaaFjb6DXA",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Book a Demo",
              href: "https://porter.run/?demo=true",
            },
            {
              label: "Heroku Migration",
              href: "https://porter.run/migrate-from-Heroku",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Porter Technologies Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  scripts: [],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "default", // this allows us to set home page to docs
        path: "docs",
        routeBasePath: "/",
        include: ["**/*.md", "**/*.mdx"],
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],
};
