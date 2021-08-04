import React from "react";
import PropTypes from "prop-types";
import { Header, TaskForm, Filters } from "@molecules";
const TemplateWithFilters = ({ children }) => {
  return (
    <>
      <Header />
      <Filters />
      <TaskForm />
      {children}
    </>
  );
};

TemplateWithFilters.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TemplateWithFilters;
