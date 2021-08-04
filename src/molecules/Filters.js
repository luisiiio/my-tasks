import React from "react";
import { useSelector } from "react-redux";
// view components
import styled from "styled-components";
import device from "@utils/device";
import { StatusFilter, DurationFilter, SearchFilter } from "@atoms";

const StyledFilters = styled.section`
  margin: 0;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.showFilters ? "auto" : "0px")};
  opacity: ${(props) => (props.showFilters ? "1" : "0")};

  > div {
    min-width: 250px;
    margin: 5px;
  }
  /* stylelint-disable-next-line value-keyword-case */
  ${device.mamabear` 
    flex-direction: row;
    justify-content: space-between;
  `}
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
