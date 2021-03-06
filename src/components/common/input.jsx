import React from "react";
import PropTypes from "prop-types";
import { normaliseName } from "../../services/utils";

const Input = ({ value, name, cols, ...rest }) => {
  const classes = `form-group col-md-${cols}`;
  const adjestedName = normaliseName(name);

  return (
    <div className={classes}>
      <label htmlFor={name}>{adjestedName}</label>
      <input
        name={name}
        id={name}
        className="form-control"
        placeholder={adjestedName}
        {...rest}
      />
      {rest.error && <div className="alert alert-danger">{rest.error}</div>}
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  cols: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func
};

export default Input;
