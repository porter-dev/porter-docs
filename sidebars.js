/**
 * Contains sidebar definition for Porter's docs page.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      id: "default",
      className: "top-level-doc",
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/overview",
        "getting-started/linking-application-source",
        {
          type: "category",
          label: "Provisioning Infrastructure",
          collapsible: true,
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "getting-started/provisioning-infrastructure",
          },
          items: [
            "getting-started/provisioning-on-aws",
            "getting-started/provisioning-on-gcp",
            "getting-started/provisioning-on-do",
          ],
        },
        "getting-started/deploying-first-application",
        "getting-started/next-steps",
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "Deploying Applications",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "deploying-applications/overview",
        },
        {
          type: "category",
          label: "Deploying from a Github Repository",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "deploying-applications/deploying-from-github",
          },
          items: [
            "deploying-applications/deploying-from-github/adding-updating-gh-app",
            "deploying-applications/deploying-from-github/selecting-application-and-build-method",
            "deploying-applications/deploying-from-github/customizing-github-workflow",
          ],
        },
        {
          type: "category",
          label: "Deploying from a Docker Registry",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "deploying-applications/deploying-from-docker-registry",
          },
          items: [
            "deploying-applications/deploying-from-docker-registry/linking-existing-registry",
            "deploying-applications/deploying-from-docker-registry/deploying",
          ],
        },
        {
          type: "category",
          label: "Deploying from the CLI",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "deploying-applications/deploying-from-cli",
          },
          items: [
            {
              type: "doc",
              label: "Creating an Application",
              id: "deploying-applications/deploying-from-cli/creating-an-application",
            },
            {
              type: "doc",
              label: "Updating an Application",
              id: "deploying-applications/deploying-from-cli/updating-an-application",
            },
            "deploying-applications/deploying-from-cli/common-configuration-options",
          ],
        },
        {
          type: "category",
          label: "HTTPS and Domains",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "deploying-applications/https-and-domains",
          },
          items: [
            "deploying-applications/https-and-domains/porter-domains",
            "deploying-applications/https-and-domains/custom-domains",
            "deploying-applications/https-and-domains/wildcard-domains",
            "deploying-applications/https-and-domains/ssl-certificates",
          ],
        },
        "deploying-applications/using-other-ci-tools",
        "deploying-applications/zero-downtime-deployments",
        "deploying-applications/blue-green-deployments",
        "deploying-applications/environment-groups",
        {
          type: "category",
          label: "Runtime Configuration Options",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "deploying-applications/runtime-configuration-options",
          },
          items: [
            "deploying-applications/runtime-configuration-options/web-applications",
            "deploying-applications/runtime-configuration-options/worker-applications",
          ],
        },
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "Managing Applications",
      items: [
        // {
        //   type: "doc",
        //   label: "Overview",
        //   id: "managing-applications/overview",
        // },
        "managing-applications/application-metrics",
        "managing-applications/logging-options",
        {
          type: "category",
          label: "Alerting",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "managing-applications/alerting",
          },
          items: [
            "managing-applications/alerting/slack-notifications",
            "managing-applications/alerting/advanced-monitoring",
            "managing-applications/alerting/pod-exit-codes",
          ],
        },
        "managing-applications/network-configuration-options",
        "managing-applications/application-troubleshooting",
        "managing-applications/version-upgrades",
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "Deploying Addons",
      items: [
        "deploying-addons/overview",
        "deploying-addons/postgresql",
        "deploying-addons/redis",
        "deploying-addons/mongodb",
        // TODO: we should have separate docs on things like getting shell access to each DB
        // {
        //   type: "category",
        //   label: "PostgreSQL",
        //   className: "expandable-subdoc",
        //   link: {
        //     type: "doc",
        //     id: "deploying-addons/postgresql",
        //   },
        //   items: [
        //     "deploying-addons/postgresql/deploying",
        //     "deploying-addons/postgresql/getting-shell-access",
        //   ],
        // },
        // {
        //   type: "category",
        //   label: "Redis",
        //   className: "expandable-subdoc",
        //   link: {
        //     type: "doc",
        //     id: "deploying-addons/redis",
        //   },
        //   items: [
        //     "deploying-addons/redis/deploying",
        //     "deploying-addons/redis/getting-shell-access",
        //     "deploying-addons/redis/exposing-redis-over-nginx",
        //   ],
        // },
        // {
        //   type: "category",
        //   label: "MongoDB",
        //   className: "expandable-subdoc",
        //   link: {
        //     type: "doc",
        //     id: "deploying-addons/mongodb",
        //   },
        //   items: [
        //     "deploying-addons/mongodb/deploying",
        //     "deploying-addons/mongodb/getting-shell-access",
        //   ],
        // },
        "deploying-addons/tailscale",
        "deploying-addons/wallarm",
        "deploying-addons/datadog",
        "deploying-addons/strapi",
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "Running Jobs and Cron Jobs",
      items: [
        "running-jobs/overview",
        "running-jobs/deploying-jobs",
        "running-jobs/advanced-options",
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "Command Line Interface (CLI)",
      items: [
        "command-line-interface/installation",
        "command-line-interface/basic-usage",
        "command-line-interface/remote-shell-access",
        {
          type: "category",
          label: "Command Reference",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "command-line-interface/command-reference",
          },
          items: [
            "command-line-interface/command-reference/porter-auth",
            "command-line-interface/command-reference/porter-cluster",
            "command-line-interface/command-reference/porter-config",
            "command-line-interface/command-reference/porter-connect",
            "command-line-interface/command-reference/porter-create",
            "command-line-interface/command-reference/porter-delete",
            "command-line-interface/command-reference/porter-get",
            "command-line-interface/command-reference/porter-helm",
            "command-line-interface/command-reference/porter-job",
            "command-line-interface/command-reference/porter-kubectl",
            "command-line-interface/command-reference/porter-list",
            "command-line-interface/command-reference/porter-logs",
            "command-line-interface/command-reference/porter-port-forward",
            "command-line-interface/command-reference/porter-project",
            "command-line-interface/command-reference/porter-registry",
            "command-line-interface/command-reference/porter-run",
            "command-line-interface/command-reference/porter-update",
          ],
        },
        "command-line-interface/heroku-cli-comparison",
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "Language-Specific Guides",
      items: [
        {
          type: "doc",
          label: "NodeJS",
          id: "language-guides/node-js",
        },
        {
          type: "doc",
          label: "Python",
          id: "language-guides/python",
        },
        {
          type: "doc",
          label: "Go",
          id: "language-guides/go",
        },
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "Preview Environments",
      items: [
        "preview-environments/overview",
        "preview-environments/concepts",
        "preview-environments/setup",
        "preview-environments/porter-yaml-reference",
        {
          type: "category",
          label: "Drivers",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "preview-environments/drivers",
          },
          items: [
            "preview-environments/drivers/deploy",
            "preview-environments/drivers/build-image",
            "preview-environments/drivers/push-image",
            "preview-environments/drivers/update-config",
            "preview-environments/drivers/random-string",
            "preview-environments/drivers/env-group",
            "preview-environments/drivers/os-env",
          ],
        },
        {
          type: "category",
          label: "Examples",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "preview-environments/examples",
          },
          items: [
            "preview-environments/examples/basic-web-application",
            "preview-environments/examples/web-and-database",
          ],
        },
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "Other Guides",
      items: [
        "other/team-management-and-authorization",
        "other/kubernetes-101",
        "other/deleting-dangling-resources",
        "other/connecting-to-cloudsql",
        "other/modify-autoscaling-limits",
        "other/aws-vpc-peering",
        {
          type: "category",
          label: "Cluster Upgrades",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "other/cluster-upgrades",
          },
          items: ["other/cluster-upgrades/upgrading-eks"],
        },
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "Terms & Privacy",
      items: [
        "terms-and-privacy/terms-of-service",
        "terms-and-privacy/privacy-policy",
      ],
      collapsible: false,
    },
  ],
  "self-hosted": [
    {
      type: "doc",
      label: "Overview",
      id: "self-hosted/self-hosted-default",
      className: "top-level-doc",
    },
    {
      type: "category",
      label: "Setup",
      items: [
        "self-hosted/setup/local",
        "self-hosted/setup/aptible",
        // "self-hosted/setup/helm",
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        "self-hosted/integrations/google-sign-in",
        "self-hosted/integrations/github",
        "self-hosted/integrations/slack",
        // "self-hosted/integrations/helm-registries",
      ],
      collapsible: false,
    },
  ],
};

module.exports = sidebars;
