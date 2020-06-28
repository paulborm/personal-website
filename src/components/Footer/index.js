import React from "react";
import { Link } from "gatsby";

import "./Footer.scss";

const LINKS = [
  {
    to: `/command-line`,
    title: `cmd`,
  },
  {
    to: `/impressum`,
    title: `Impressum`,
  },
  {
    to: `/datenschutz`,
    title: `Datenschutz`,
  },
];

const Footer = () => (
  <footer className="Footer">
    <div className="Footer__info">
      <a
        href="https://github.com/paulborm/pgp-public-key/blob/master/paulborm.asc"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        PGP public key
      </a>{" "}
      fingerprint: 58B5 32A5 2D90 FD6E A13A 5BBB 3A52 B643 9962 A465
    </div>
    <div className="Footer__links">
      {LINKS.map(({ to, title }, index) => (
        <Link
          className="Footer__link"
          key={to + title}
          to={to}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          {title}
        </Link>
      ))}
    </div>
  </footer>
);

export default Footer;
