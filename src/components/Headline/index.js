import React from "react";
import PropTypes from "prop-types";
import returnModifiersFor from "../../helpers/returnModifiers";

import './_Headline.scss';

const Headline = ({
        className,
        style,
        children,
        as,
        look,
        align
    }) => {
    const baseName = "Headline";
    const classNames = [
        baseName,
        className,
        returnModifiersFor({ name: baseName, modifiers: look }),
        returnModifiersFor({ name: baseName, modifiers: align }),
    ];
    const Element = as;

    return (
        <Element className={classNames.join(' ').trim()} style={style}>
            <span
                className={`${baseName}__inner`}
            >{children}</span>
        </Element>
    )
}

Headline.propTypes = {
    as: PropTypes.string,
    look: PropTypes.string,
    align: PropTypes.string,
}

Headline.defaultProps = {
    as: "div",
    align: "",
}

export default Headline
