import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const TimeFilter = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl variant="outlined">
      <InputLabel id="demo-simple-select-outlined-label">Tiempo</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={age}
        onChange={handleChange}
        label="Age"
      >
        <MenuItem value="all">Todas</MenuItem>
        <MenuItem value="short">Corta: 30min o menos</MenuItem>
        <MenuItem value="medium">Media: 30min - 1hr</MenuItem>
        <MenuItem value="large">Larga: 1hr - 2hrs</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TimeFilter;
