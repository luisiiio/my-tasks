import React from "react";
import PropTypes from "prop-types";
import { Header, TaskForm, Footer } from "@molecules";
const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <TaskForm />
      {children}
      <Footer />
    </>
  );
};

DefaultTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultTemplate;
