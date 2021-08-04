import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateDurationFilter } from "@store/filters/actions";
//  view components
import { SelectDuration } from "@atoms";

const DurationFilter = () => {
  const dispatch = useDispatch();
  const durationFilter = useSelector((state) => state.filters.durationFilter);

  const handleChange = (event) => {
    event.preventDefault();
    dispatch(updateDurationFilter({ durationFilter: event.target.value }));
  };

  return (
    <SelectDuration value={durationFilter} onChangeSelect={handleChange} />
  );
};

export default DurationFilter;
