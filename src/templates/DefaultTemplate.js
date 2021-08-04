import React from "react";
import PropTypes from "prop-types";
import { Header, TaskForm } from "@molecules";
const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <TaskForm />
      {children}
    </>
  );
};

DefaultTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultTemplate;
