import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Headline from "../components/Headline"

const IndexPage = () => (
    <Layout style={{
        display: `flex`,
        flex: `1 1 auto`,
        alignItems: `center`
    }}>
        <SEO title="Frontend-Developer & Mediengestalter | Stuttgart, Esslingen, Wendlingen" />
        <Headline
            as="h2"
            look="large"
            style={{
                margin: `0 auto`,
                maxWidth: `16em`,
                fontFamily: `monospace`,
                fontWeight: `normal`,
            }}
        >
            <span
                role="img"
                aria-label="Working guy in front of a notebook"
                style={{
                    userSelect: `none`,
                    pointerEvents: `none`
                }}
            >
                👨‍💻
            </span>
            <br/> Frontend-Developer & Mediengestalter aus dem Raum Stuttgart.
        </Headline>
    </Layout>
)

export default IndexPage
