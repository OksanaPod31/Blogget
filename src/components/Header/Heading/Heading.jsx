import React from 'react';
import style from './Heading.module.css';
import PropTypes from 'prop-types';

export const Heading = ({text}) => {
  Heading.propTypes = {
    text: PropTypes.string
  };

  return (
    <h1 className={style.heading}>{text}</h1>
  );
};
