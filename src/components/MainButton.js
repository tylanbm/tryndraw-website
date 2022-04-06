import React from "react";
import PropTypes from "prop-types";

const MainButton = ({ label, link }) => (
  <a href={link}>
    <div className="button-container">
      <p className="button-label">{label}</p>
    </div>
  </a>
);

MainButton.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default MainButton;
