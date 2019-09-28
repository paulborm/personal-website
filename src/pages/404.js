import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Headline from "../components/Headline"

const NotFoundPage = () => (
    <Layout style={{
        display: `flex`,
        flex: `1 1 auto`,
        alignItems: `center`
    }}>
        <SEO title="404: Not found" />
        <Headline
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
                🤦‍♂️
            </span>
            <br/> <span style={{ textDecoration: `line-through` }}>Keine Seite gefunden.</span>
        </Headline>
    </Layout>
)

export default NotFoundPage
