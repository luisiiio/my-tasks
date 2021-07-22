import React from "react";

import { StatusFilter, TimeFilter, SearchFilter } from "@atoms";

const Filters = () => {
  return (
    <div>
      <SearchFilter />
      <StatusFilter />
      <TimeFilter />
    </div>
  );
};

export default Filters;
