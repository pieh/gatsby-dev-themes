const merge = require("deepmerge");

module.exports = (themeOptions) => {
  // Default options to be used in theme
  const defaultOptions = {
    // Base url for rendering site
    baseUrl: "/", // Default: "/"
    // Data directory
    dataPath: "content/blog", // Default: "content/projects"
  };
  // Options created using default and provided options
  const options = merge(defaultOptions, themeOptions);

  return {
    // Default siteMetadata
    siteMetadata: {
      appName: "@sonapraneeth/blog package",
      title: "@sonapraneeth/blog package",
      author: "John Doe",
      // TODO: Need to change this URL
      siteUrl: "/",
      baseUrl: "/",
      description:
        "This site is a demonstration for using theme " + "@sonapraneeth/blog",
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
      "gatsby-plugin-mdx",
      "gatsby-plugin-react-helmet",
    ],
  };
};
