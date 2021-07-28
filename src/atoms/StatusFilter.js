import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const StatusFilter = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl variant="outlined">
      <InputLabel id="demo-simple-select-outlined-label">Estatus</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={age}
        onChange={handleChange}
        label="Age"
      >
        <MenuItem value="all">Todas</MenuItem>
        <MenuItem value="completed">Completadas</MenuItem>
        <MenuItem value="pending">Pendientes</MenuItem>
      </Select>
    </FormControl>
  );
};

export default StatusFilter;
