import React from "react";
import { Link } from "gatsby";

import "./Footer.scss";

const LINKS = [
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
            © {new Date().getFullYear()}, built using
            {` `}
            <a
                href="https://www.gatsbyjs.org"
                target="_blank"
                rel="nofollow noopener noreferrer"
            >
                gatsby
            </a>
        </div>
        <div className="Footer__links">
            {LINKS.map(({ to, title }) => (
                <Link
                    className="Footer__link"
                    key={to + title}
                    to={to}
                >
                    {title}
                </Link>
            ))}
        </div>
    </footer>
);

export default Footer
