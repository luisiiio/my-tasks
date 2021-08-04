import React from "react";
import PropTypes from "prop-types";
import { Header, TaskForm, Filters, Footer } from "@molecules";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 100vw;
  margin: 20px auto 0;
  padding: 0 10px;
  max-width: 950px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  overflow: scroll;
`;

const TemplateWithFilters = ({ children }) => {
  return (
    <>
      <Header />
      <TaskForm />
      <StyledMain>
        <Filters />
        {children}
      </StyledMain>
      <Footer />
    </>
  );
};

TemplateWithFilters.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TemplateWithFilters;
