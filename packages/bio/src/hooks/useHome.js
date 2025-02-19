import {useStaticQuery, graphql} from "gatsby";

// import {useSiteMetadata} from "@sonapraneeth/base/src/hooks/useSiteMetadata";

// Hook for retrieving site meta data
export const useHome = () => {
  /* const siteMeta = useSiteMetadata();
  const query = `
    query AuthorDetailedInfoShadowed {
      authorInfo(name: { eq: "${siteMeta.author}" }) {
        name
        description
        cover {
          childImageSharp {
            fluid(maxWidth: 400) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
        username {
          email
          facebook
          github
          linkedin
          twitter
        }
      }
      mdx(frontmatter: { type: { eq: "home-page" } }) {
        frontmatter {
          title
          author
          summary
        }
        body
      }
    }
  `;
  console.log(query);*/
  /* Reference: https://www.gatsbyjs.org/docs/use-static-query/ */
  /* const home = useStaticQuery(
    graphql`${query}`
  );*/
  const home = useStaticQuery(
    graphql`
      query AuthorDetailedInfoShadowed {
        authorInfo(name: { eq: "John Doe" }) {
          name
          description
          cover {
            childImageSharp {
              fluid(maxWidth: 400) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
          username {
            email
            facebook
            github
            linkedin
            twitter
          }
        }
        mdx(frontmatter: { type: { eq: "home-page" } }) {
          frontmatter {
            title
            author
            summary
          }
          body
        }
      }
    `
  );
  return home;
};
