import React from "react";
import PropTypes from "prop-types";
import MainButton from "./MainButton";

const AuthorCard = ({ source }) => (
  <div className="author-container">
    <div className="spacing">
        <img className="author-image" src={require(`../${source}`)} alt="QR code for Expo GO link" />
    </div>
    <MainButton label='View On Github' link='https://github.com/tylanbm' />
  </div>
  
);

AuthorCard.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default AuthorCard;