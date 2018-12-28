import React from "react";
import PropTypes from "prop-types";
import { normaliseName } from "../../services/utils";

const DropDown = ({ name, cols, options, ...rest }) => {
  const classes = `form-group col-md-${cols}`;
  const adjestedName = normaliseName(name);

  return (
    <div className={classes}>
      <label htmlFor={name}>{adjestedName}</label>
      <select id={name} name={name} className="form-control" {...rest}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {rest.error && <div className="alert alert-danger">{rest.error}</div>}
    </div>
  );
};

DropDown.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  cols: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DropDown;
