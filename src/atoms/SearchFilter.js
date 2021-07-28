import React from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

const SearchFilter = () => {
  return (
    <FormControl>
      <TextField label="Search input" variant="outlined" />
    </FormControl>
  );
};

export default SearchFilter;
