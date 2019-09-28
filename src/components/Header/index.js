import React from "react"
import Headline from "../Headline"
import Social from "../Social"

import "./Header.scss";
import { Link } from "gatsby";

const Header = () => (
    <div className="Header">
        <Headline className="Header__headline" as="h1" look="small uppercase">
            <Link to="/" title="www.paulborm.de">Paul Borm</Link>
        </Headline>
        <Social />
    </div>
);

export default Header
