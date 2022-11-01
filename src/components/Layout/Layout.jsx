import React from 'react';
import style from './Layout.module.css';
import PropTypes from 'prop-types';


export const Layout = ({children}) => {
  Layout.propTypes = {
    children: PropTypes.string
  };

  return (
    <div className={style.container}>
      {children}
    </div>
  );
};
