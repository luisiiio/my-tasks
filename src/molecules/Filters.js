import React from "react";
import styled from "styled-components";
import device from "@utils/device";
import { StatusFilter, TimeFilter, SearchFilter } from "@atoms";

const StyledFilters = styled.section`
  margin: 0;
  display: flex;
  flex-direction: column;

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
  return (
    <StyledFilters>
      <SearchFilter />
      <StatusFilter />
      <TimeFilter />
    </StyledFilters>
  );
};

export default Filters;
