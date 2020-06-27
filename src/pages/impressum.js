import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import contact from "../contents/contact.json"

const Impressum = () => (
  <Layout
    style={{
      margin: `0 auto`,
      maxWidth: 560,
    }}
  >
    <SEO title="Impressum" />
    <h1>Impressum</h1>
    <h2>Angaben gemäß § 5 TMG:</h2>
    <p>
      {contact.fullName}
      <br /> {contact.address.street}
      <br /> {contact.address.city}
    </p>
    <p>
      Telefon: {contact.phone}
      <br /> E-Mail: {contact.mail}
    </p>

    <h2>Online-Streitbeilegung</h2>
    <p>
      Die Europäische Kommission stellt unter{" "}
      <a
        href="https://ec.europa.eu/consumers/odr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://ec.europa.eu/consumers/odr/
      </a>{" "}
      eine Plattform zur Online-Streitbeilegung bereit, die Verbraucher für die
      Beilegung einer Streitigkeit nutzen können und auf der weitere
      Informationen zum Thema Streitschlichtung zu finden sind.
    </p>
    <h2>Außergerichtliche Streitbeilegung</h2>
    <p>
      Wir sind weder verpflichtet noch dazu bereit, im Falle einer Streitigkeit
      mit einem Verbraucher an einem Streitbeilegungsverfahren vor einer
      Verbraucherschlichtungsstelle teilzunehmen.
    </p>
  </Layout>
)

export default Impressum
