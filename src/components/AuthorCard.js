import React from "react";
import PropTypes from "prop-types";
import MainButton from "./MainButton";

const AuthorCard = ({ source, label, link }) => (
  <div className="author-container">
    <div className="spacing">
        <img className="author-image" src={require(`../${source}`)} alt="QR code for Expo GO link" />
    </div>
    <MainButton label={label} link={link} />
  </div>
  
);

AuthorCard.propTypes = {
  source: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default AuthorCard;