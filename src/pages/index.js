import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Headline from "../components/Headline";

const IndexPage = () => (
  <Layout
    style={{
      display: `flex`,
      flex: `1 1 auto`,
      alignItems: `center`,
    }}
  >
    <style>
      {`
        @keyframes fadeUp {
            from {
                opacity: 0;
                transform: translateY(40%);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `}
    </style>
    <SEO title="Frontend-Entwickler | Stuttgart, Esslingen, Wendlingen" />
    <Headline
      as="h2"
      look="large"
      style={{
        margin: `0 auto`,
        maxWidth: `16em`,
        fontFamily: `monospace`,
        fontWeight: `normal`,
        animationName: `fadeUp`,
        animationDuration: `1000ms`,
        animationDelay: `350ms`,
        animationFillMode: `both`,
      }}
    >
      <span
        role="img"
        aria-label="Working guy in front of a notebook"
        style={{
          userSelect: `none`,
          pointerEvents: `none`,
        }}
      >
        👨‍💻
      </span>
      <br />
      Frontend-Entwickler aus Stuttgart.
    </Headline>
  </Layout>
);

export default IndexPage;
