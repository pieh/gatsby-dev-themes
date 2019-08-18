const merge = require("deepmerge");

module.exports = (themeOptions) => {
  // Default options to be used in theme
  const defaultOptions = {
    // Base url for rendering site
    baseUrl: "/", // Default: "/"
    // Data directory
    dataPath: "content/data", // Default: "content/data"
    // Directory path for images
    assetsPath: "content/assets", // Default: "content/assets"
    // Directory path for MDX home page content
    homePath: "content/home", // Default: "content/home"
  };
  // Options created using default and provided options
  const options = merge(defaultOptions, themeOptions);

  return {
    // Default siteMetadata
    siteMetadata: {
      appName: "Bio",
      title: "Bio",
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
          name: "author",
          path: options.dataPath,
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "bio-assets",
          path: options.assetsPath,
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "home",
          path: options.homePath,
        },
      },
      // "gatsby-plugin-mdx",
      "gatsby-plugin-react-helmet",
      "gatsby-transformer-yaml",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
    ],
  };
};
