const merge = require("deepmerge");

module.exports = (themeOptions) => {
  // Default options to be used in theme
  const defaultOptions = {
    // Base url for rendering site
    baseUrl: "/", // Default: "/"
    // Data directory
    dataPath: "content/projects", // Default: "content/projects"
  };
  // Options created using default and provided options
  const options = merge(defaultOptions, themeOptions);

  return {
    // Default siteMetadata
    siteMetadata: {
      appName: "Projects",
      title: "Projects",
      author: "John Doe",
      // TODO: Need to change this URL
      siteUrl: "https://www.gatsbyjs.org",
      description:
        "This site is a demonstration for using theme " +
        "gatsby-theme-simple-bio",
      social: {
        facebook: "john-doe",
        twitter: "john-doe",
        email: "john-doe",
        linkedin: "john-doe",
        github: "john-doe",
      },
    },
    plugins: [
      "@sonapraneeth/base",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: options.contentPath,
          path: options.contentPath,
        },
      },
      {
        resolve: "gatsby-plugin-mdx",
        options: {
          extensions: [".mdx", ".md"],
          gatsbyRemarkPlugins: [
            {
              resolve: "gatsby-remark-images",
              options: {
                // should this be configurable by the end-user?
                maxWidth: 1380,
                linkImagesToOriginal: false,
              },
            },
            "gatsby-remark-autolink-headers",
            // "gatsby-remark-slug",
            "gatsby-remark-copy-linked-files",
            "gatsby-remark-numbered-footnotes",
            "gatsby-remark-smartypants",
          ],
          remarkPlugins: [require("remark-slug")],
        },
      },
      "gatsby-plugin-react-helmet",
    ],
  };
};
