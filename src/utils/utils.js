import React from 'react';
import PropTypes from 'prop-types';

export const Label = ({ htmlFor, ...props }) => {
  return <label htmlFor={htmlFor} {...props} />;
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired
};
