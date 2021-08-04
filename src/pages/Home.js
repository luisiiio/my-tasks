import React from "react";
import styled from "styled-components";
import { TemplateWithFilters } from "@templates";
import { ListTasksCard } from "@organisms";

const StyledHome = styled(TemplateWithFilters)`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  > section {
    margin: 5px;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <ListTasksCard />
    </StyledHome>
  );
};

export default Home;
