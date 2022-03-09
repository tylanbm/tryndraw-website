import React from "react";
import PropTypes from "prop-types";

const MainButton = ({ label }) => (
  <div>
    <button className="button-container">
      <p className="button-label">{label}</p>
    </button>
  </div>
);

MainButton.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default MainButton;