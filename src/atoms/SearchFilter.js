import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchFilter } from "@store/filters/actions";
// view components
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

const SearchFilter = () => {
  const searchFilter = useSelector((state) => state.filters.searchFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    dispatch(updateSearchFilter({ searchFilter: event.target.value }));
  };
  return (
    <FormControl>
      <TextField
        value={searchFilter}
        onChange={handleChange}
        label="Buscador"
        variant="outlined"
      />
    </FormControl>
  );
};

export default SearchFilter;
