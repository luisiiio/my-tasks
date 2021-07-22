import React from "react";
import styled from "styled-components";

import { Filters } from "@molecules";

const StyledHome = styled.div`
  margin: 0;
`;

const Home = () => {
  return (
    <StyledHome>
      <h1>Que onda mi gente de internet!</h1>
      <Filters />
    </StyledHome>
  );
};

export default Home;
