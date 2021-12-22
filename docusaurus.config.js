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
      title: "Porter Documentation",
      logo: {
        alt: "Porter",
        src: "/img/logo.png",
        srcDark: "/img/logo.png",
      },
      items: [],
    },
    footer: {},
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
        id: "home-doc", // this allows us to set home page to docs
        path: "docs",
        routeBasePath: "/",
        include: ["**/*.md", "**/*.mdx"],
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],
};
