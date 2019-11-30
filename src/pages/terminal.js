import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Headline from "../components/Headline";

const CATEGORIES = {
    "ffmpeg": {
        title: "ffmpeg",
        url: "https://ffmpeg.org/ffmpeg-utils.html"
    },
    'youtube-dl': {
        title: "youtube-dl",
        url: "https://github.com/ytdl-org/youtube-dl"
    },
    "openssl": {
        title: "openssl",
        url: "https://ss64.com/osx/openssl.html"
    }
}

const TerminalTools = ({
    data: {
        allMarkdownRemark: { group }
    }
}) => (
    <Layout style={{
        margin: `0 auto`,
        maxWidth: 960,
    }}>
        <SEO title="Terminal Tools" />
        <div style={{ padding: `4em 0` }}>
            <Headline as="h1">Command line tools and commands</Headline>
            <p>A collection of handy tools and commands I use from time to time but can't memorize.</p>
        </div>

        {group.map(({ category, items }) => (
            <Group
                key={category}
                name={category}
                items={items}
            />
        ))}
    </Layout>
);

export default TerminalTools

const Group = ({ name = "", items = [] }) => (
    <div
        id={name}
        style={{ margin: `1em 0`, padding: `1em 0` }}
    >
        <Headline as="h2">
            <a
                href={`#${name}`}
                aria-hidden
                style={{
                    textDecoration: 'none',
                    fontSize: '.65em',
                    verticalAlign: 'middle',
                    marginRight: '.25em',
                }}
            >
                🔗
            </a>
            {CATEGORIES[name].title}
        </Headline>
        {items.map(({ node }) => (
            <div
                key={node.id}
                id={node.frontmatter.slug}
                dangerouslySetInnerHTML={{ __html: node.html }}
            />
        ))}
    </div>
);

export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            filter: {frontmatter: {draft: {eq: false}}}
            sort: {order: ASC, fields: frontmatter___category}
        ) {
            group(field: frontmatter___category) {
                category: fieldValue
                items: edges {
                    node {
                        id
                        html
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    }
`;