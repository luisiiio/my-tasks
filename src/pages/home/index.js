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
      <h1>Que onda mi gente de internet!</h1>
      <Filters />
      <MainSection />
    </StyledHome>
  );
};

export default Home;
