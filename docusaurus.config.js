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
          label: "Porter Cloud",
        },
        {
          type: "doc",
          position: "left",
          docId: "self-hosted/self-hosted-default",
          label: "Self-Hosted",
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
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/getting-started/overview",
            from: ["/docs/overview"],
          },
          {
            to: "/getting-started/linking-application-source",
            from: ["/docs/linking-up-application-source"],
          },
          {
            to: "/getting-started/provisioning-infrastructure",
            from: ["/docs/provisioning-infrastructure"],
          },
          {
            to: "/getting-started/provisioning-on-aws",
            from: ["/docs/getting-started-on-aws"],
          },
          {
            to: "/getting-started/provisioning-on-gcp",
            from: ["/docs/provisioning-on-google-cloud"],
          },
          {
            to: "/getting-started/provisioning-on-do",
            from: ["/docs/provisioning-on-digital-ocean"],
          },
          {
            to: "/deploying-applications/overview",
            from: ["/docs/deploying-applications"],
          },
          {
            to: "/deploying-applications/deploying-from-github",
            from: ["/docs/deploying-from-git"],
          },
          {
            to: "/deploying-applications/deploying-from-docker-registry",
            from: ["/docs/deploying-from-image-registry"],
          },
          {
            to: "/deploying-applications/https-and-domains",
            from: ["/docs/setting-up-custom-domains-and-ssl-certificates"],
          },
          {
            to: "/deploying-applications/overview",
            from: ["/docs/applications"],
          },
          {
            to: "/deploying-applications/deploying-from-github",
            from: ["/docs/deploying-from-git-repository"],
          },
          {
            to: "/deploying-applications/deploying-from-docker-registry",
            from: ["/docs/deploying-from-docker-image-registry"],
          },
          {
            to: "/deploying-applications/deploying-from-cli",
            from: ["/docs/deploying-from-the-cli"],
          },
          {
            to: "/deploying-addons/overview",
            from: ["/docs/addons"],
          },
          {
            to: "/deploying-addons/postgresql",
            from: ["/docs/postgresdb"],
          },
          {
            to: "/deploying-addons/redis",
            from: ["/docs/redis"],
          },
          {
            to: "/deploying-addons/mongodb",
            from: ["/docs/mongodb"],
          },
          {
            to: "/deploying-addons/tailscale",
            from: ["/docs/tailscale"],
          },
          {
            to: "/deploying-addons/wallarm",
            from: ["/docs/wallarm"],
          },
          {
            to: "/deploying-addons/datadog",
            from: ["/docs/datadog"],
          },
          {
            to: "/deploying-addons/strapi",
            from: ["/docs/strapi"],
          },
          {
            to: "/deploying-applications/https-and-domains",
            from: ["/docs/https-and-custom-domains"],
          },
          {
            to: "/deploying-applications/deploying-from-docker-registry/linking-existing-registry",
            from: ["/docs/linking-an-existing-docker-container-registry"],
          },
          {
            to: "/other/deleting-dangling-resources",
            from: ["/docs/deleting-dangling-resources"],
          },
          {
            to: "/deploying-applications/environment-groups",
            from: ["/docs/using-environment-groups"],
          },
          {
            to: "/running-jobs/overview",
            from: ["/docs/jobs-and-cron-jobs"],
          },
          {
            to: "/other/connecting-to-cloudsql",
            from: ["/docs/securely-connecting-to-google-cloud-sql-from-porter"],
          },
          {
            to: "/managing-applications/network-configuration-options",
            from: ["/docs/preserving-client-ip-addresses"],
          },
          {
            to: "/self-hosted/setup/local",
            from: ["/docs/running-porter-locally"],
          },
          {
            to: "/managing-applications/application-metrics",
            from: ["/docs/setting-up-metrics-visualization"],
          },
          {
            to: "/managing-applications/version-upgrades",
            from: ["/docs/template-versioning-and-upgrades"],
          },
          {
            to: "/managing-applications/network-configuration-options",
            from: ["/docs/advanced-nginx-settings"],
          },
          {
            to: "/deploying-applications/deploying-from-github/adding-updating-gh-app",
            from: ["/docs/setting-up-github-app-access"],
          },
          {
            to: "/other/team-management-and-authorization",
            from: ["/docs/team-management-and-authorization"],
          },
          {
            to: "/managing-applications/alerting",
            from: ["/docs/setting-up-slack-notifications"],
          },
          {
            to: "/deploying-addons/redis",
            from: ["/docs/exposing-redis-over-nginx"],
          },
          {
            to: "/other/kubernetes-101",
            from: ["/docs/kubernetes-101"],
          },
          {
            to: "/self-hosted",
            from: ["/docs/deployment-instructions"],
          },
          {
            to: "/self-hosted/setup/aptible",
            from: ["/docs/aptible"],
          },
          {
            to: "/self-hosted/integrations/google-sign-in",
            from: ["/docs/deployment-instructions"],
          },
          {
            to: "/self-hosted",
            from: ["/docs/sso"],
          },
          {
            to: "/self-hosted/integrations/google-sign-in",
            from: ["/docs/google"],
          },
          {
            to: "/self-hosted/integrations/github",
            from: ["/docs/github"],
          },
          {
            to: "/self-hosted/integrations/slack",
            from: ["/docs/slack"],
          },
          {
            to: "/deploying-applications/deploying-from-github/selecting-application-and-build-method",
            from: ["/docs/auto-deploy-requirements"],
          },
          {
            to: "/cli/installation",
            from: ["/docs/cli-documentation"],
          },
          {
            to: "/terms-and-privacy/terms-of-service",
            from: ["/docs/terms-of-service"],
          },
          {
            to: "/terms-and-privacy/privacy-policy",
            from: ["/docs/privacy-policy"],
          },
        ],
      },
    ],
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
