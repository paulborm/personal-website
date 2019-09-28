import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Impressum = () => (
    <Layout style={{
        margin: `0 auto`,
        maxWidth: 560
    }}>
        <SEO title="Impressum" />
        <h1>Impressum</h1>
        <h2>Angaben gemäß § 5 TMG:</h2>
        <p>
            Paul Borm<br />
            Im Städtle 9<br />
            73240 Wendlingen am Neckar
        </p>
        <h2>Kontakt:</h2>
        <p>
            Telefon: 07024 5681353<br />
            E-Mail: hallo@paulborm.de
        </p>
        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
        <p>
            Paul Borm<br />
            Im Städtle 9<br />
            73240 Wendlingen am Neckar
        </p>
    </Layout>
);

export default Impressum
