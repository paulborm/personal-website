import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXing, faCodepen, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import "./Social.scss";

const LINKS = [
    {
        icon: faXing,
        url: `https://www.xing.com/profile/Paul_Borm/`,
        title: `Xing - Paul Borm`
    },
    {
        icon: faCodepen,
        url: `https://codepen.io/paulborm`,
        title: `Codepen - Paul Borm`
    },
    {
        icon: faInstagram,
        url: `https://www.instagram.com/paulorero/`,
        title: `Instagram - Paul Borm`
    },
    {
        icon: faTwitter,
        url: `https://twitter.com/borm_paul`,
        title: `Twitter - Paul Borm`
    },
];

const Social = () => (
    <div className="Social">
        {LINKS.map(({ icon, url, title }) => (
            <a
                key={url}
                className="Social__item"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
            >
                <FontAwesomeIcon icon={icon} />
            </a>
        ))}
    </div>
);

export default Social;