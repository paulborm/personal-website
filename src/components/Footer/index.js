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
            © {new Date().getFullYear()}, gebaut mit
            {` `}
            <a
                href="https://www.gatsbyjs.org"
                target="_blank"
                rel="nofollow noopener noreferrer"
            >
                Gatsby
            </a>
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

export default Footer
