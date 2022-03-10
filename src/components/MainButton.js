import React from "react";
import PropTypes from "prop-types";

const MainButton = ({ label, link }) => (
  
  <div className="button-container">
    <a href={link}>
      <p className="button-label">{label}</p>
    </a>
  </div>
  
);

MainButton.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default MainButton;