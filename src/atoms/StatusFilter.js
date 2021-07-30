import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStatusFilter } from "@store/filters/actions";
// view components
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const statusFilter = useSelector((state) => state.filters.statusFilter);

  const handleChange = (event) => {
    event.preventDefault();
    dispatch(updateStatusFilter({ statusFilter: event.target.value }));
  };
  return (
    <FormControl variant="outlined">
      <InputLabel id="demo-simple-select-outlined-label">Estatus</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={statusFilter}
        onChange={handleChange}
        label="estatus"
      >
        <MenuItem value="all">Todas</MenuItem>
        <MenuItem value="done">Completadas</MenuItem>
        <MenuItem value="pending">Pendientes</MenuItem>
      </Select>
    </FormControl>
  );
};

export default StatusFilter;
