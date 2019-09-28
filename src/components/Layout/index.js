import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";

import "./reset.css";
import "./Layout.scss";

const Layout = ({ style, children }) => (
    <div className="Layout">
        <Header />
        <main className="Layout__inner" style={style}>{children}</main>
        <Footer />
    </div>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
