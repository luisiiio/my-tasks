import React from "react";
import { useSelector } from "react-redux";
// view components
import styled from "styled-components";
import { StatusFilter, DurationFilter, SearchFilter } from "@atoms";

const StyledFilters = styled.section`
  width: 100%;
  display: ${(props) => (props.showFilters ? "grid" : "none")};
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  padding: 10px 0;
  overflow: scroll;

  > div {
    min-width: 100px;
    max-width: 300px;
  }
`;

const Filters = () => {
  const showFilters = useSelector((state) => state.filters.showFilters);
  return (
    <StyledFilters showFilters={showFilters}>
      <SearchFilter />
      <StatusFilter />
      <DurationFilter />
    </StyledFilters>
  );
};

export default Filters;
