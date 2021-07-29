import React from "react";
import styled from "styled-components";

import { Filters } from "@molecules";
import { ListTasksCard } from "@organisms";

const StyledHome = styled.div`
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
      <Filters />
      <ListTasksCard />
    </StyledHome>
  );
};

export default Home;
