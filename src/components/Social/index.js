import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faXing,
  faCodepen,
  faInstagram,
  faNpm,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

import "./Social.scss"

const LINKS = [
  {
    icon: faXing,
    url: `https://www.xing.com/profile/Paul_Borm/`,
    title: `Xing - Paul Borm`,
    shortName: `Xing`,
  },
  {
    icon: faGithub,
    url: `https://github.com/paulborm`,
    title: `GitHub - Paul Borm`,
    shortName: `GitHub`,
  },
  {
    icon: faNpm,
    url: `https://www.npmjs.com/~paulborm`,
    title: `npm - Paul Borm`,
    shortName: `npm`,
  },
  {
    icon: faCodepen,
    url: `https://codepen.io/paulborm`,
    title: `Codepen - Paul Borm`,
    shortName: `Codepen`,
  },
  {
    icon: faInstagram,
    url: `https://www.instagram.com/paulorero/`,
    title: `Instagram - Paul Borm`,
    shortName: `Instagram`,
  },
]

const Social = () => (
  <div className="Social">
    {LINKS.map(({ icon, url, title, shortName }, index) => (
      <a
        key={url}
        className="Social__item"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        style={{ animationDelay: `${index * 100}ms` }}
        data-dropdown={shortName}
      >
        <FontAwesomeIcon icon={icon} />
      </a>
    ))}
  </div>
)

export default Social
