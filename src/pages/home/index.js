import React from "react";
import styled from "styled-components";

import { MainSection, Filters } from "@molecules";

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
      <MainSection />
    </StyledHome>
  );
};

export default Home;
