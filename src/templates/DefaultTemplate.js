import React from "react";
import PropTypes from "prop-types";
import { Header } from "@molecules";
const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

DefaultTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultTemplate;
