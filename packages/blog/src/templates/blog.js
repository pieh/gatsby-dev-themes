import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import {MDXProvider} from "@mdx-js/react";

import {SContainer, Styled} from "@sonapraneeth/base";
import {
  Grid,
  GridItem,
  BaseLayout,
  Chip,
  TableOfContents,
  MDXComponents,
  TagList,
  from,
  screens,
} from "@sonapraneeth/base";

const components = {
  h1: MDXComponents.h1,
};

/**
 *
 * @param {*} data
 * @return {JSX}
 */
function Blog({data, location}) {
  const toc = data.mdx.tableOfContents;
  const isTOCEmpty = JSON.stringify(toc) === "{}";
  return (
    <BaseLayout location={data.blog.slug} title={""}>
      <SContainer>
        <Styled.h1>{data.blog.title}</Styled.h1>
        <Chip type={"date"}>
          <b>Published: </b>
          {data.blog.publishedDate}
        </Chip>{" "}
        <Chip type={"date"}>
          <b>Last Modified: </b>
          {data.file.modifiedTime}
        </Chip>{" "}
        <TagList tags={data.blog.tags} />
        <hr />
        <section>
          {toc !== null && toc !== undefined && !isTOCEmpty && (
            <Grid noCols={2} nSizes={[1, 2.5]}>
              <GridItem
                id="toc"
                css={{
                  margin: 0,
                  [from(screens.mobile)]: {
                    position: "sticky",
                    top: "10vh",
                    placeSelf: "self-start stretch",
                  },
                }}
              >
                <TableOfContents
                  tableOfContents={data.mdx.tableOfContents}
                  location={location}
                />
              </GridItem>
              <GridItem id="body" css={{margin: 0}}>
                <MDXProvider components={components}>
                  <MDXRenderer>{data.blog.body}</MDXRenderer>
                </MDXProvider>
              </GridItem>
            </Grid>
          )}
          {(toc === undefined || toc === null || isTOCEmpty) && (
            <Grid noCols={1}>
              <GridItem id="body" css={{margin: 0}}>
                <MDXProvider components={components}>
                  <MDXRenderer>{data.blog.body}</MDXRenderer>
                </MDXProvider>
              </GridItem>
            </Grid>
          )}
        </section>
      </SContainer>
    </BaseLayout>
  );
}

Blog.propTypes = {
  data: PropTypes.any.isRequired,
  location: PropTypes.any,
};

Blog.defaultProps = {};

export default Blog;

export const query = graphql`
  query BlogQuery($id: String!, $fileAbsolutePath: String!) {
    blog(id: { eq: $id }) {
      id
      slug
      title
      publishedDate
      tags
      body
    }
    mdx(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      tableOfContents(maxDepth: 10)
    }
    file(absolutePath: { eq: $fileAbsolutePath }) {
      modifiedTime(formatString: "DD MMM YYYY")
    }
  }
`;
