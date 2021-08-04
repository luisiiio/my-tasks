import React from "react";
import { PropTypes } from "prop-types";
//  view components
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const SelectDuration = ({
  value,
  fullWidth = false,
  margin = undefined,
  isForm = false,
  style = {},
  onChangeSelect,
  id,
  name,
  error = false,
  helperText = "",
  disabled = false,
}) => {
  return (
    <TextField
      id={id}
      name={name}
      label="Duración"
      variant="outlined"
      select
      fullWidth={fullWidth}
      margin={margin}
      style={style}
      value={value}
      onChange={onChangeSelect}
      error={error}
      helperText={helperText}
      disabled={disabled}
    >
      {!isForm && <MenuItem value="all">Todas</MenuItem>}
      <MenuItem value="short">Corta: 30min o menos</MenuItem>
      <MenuItem value="medium">Media: 30min - 1hr</MenuItem>
      <MenuItem value="large">Larga: 1hr - 2hrs</MenuItem>
    </TextField>
  );
};

SelectDuration.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  isForm: PropTypes.bool,
  fullWidth: PropTypes.bool,
  margin: PropTypes.string,
  style: PropTypes.bool,
  disabled: PropTypes.bool,
  onChangeSelect: PropTypes.func,
};

export default SelectDuration;
