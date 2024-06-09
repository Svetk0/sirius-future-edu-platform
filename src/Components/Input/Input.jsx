import "./Input.scss";

import PropTypes from "prop-types";
import React from "react";

const Input = React.forwardRef((props, ref) => (
    <input className="input" {...props} ref={ref} />
));

Input.defaultProps = {
    type: "text",
};

Input.propTypes = {
    type: PropTypes.string,
};

export default Input;
