import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import contact from "../contents/contact.json";

const Impressum = () => (
  <Layout
    style={{
      margin: `0 auto`,
      maxWidth: 640,
    }}
  >
    <SEO title="Impressum" />
    <h1>Impressum</h1>
    <h2>Angaben gemäß § 5 TMG:</h2>
    <p>
      {contact.fullName}
      <br /> {contact.address.street}
      <br /> {contact.address.city}
      <br />
      <br /> E-Mail: {contact.mail}
    </p>
    <p>
      <strong>Inhaltlich verantwortlich gemäß § 55 RStV:</strong>
      <br /> {contact.fullName}, {contact.address.street},{" "}
      {contact.address.city}
    </p>
  </Layout>
);

export default Impressum;
