import React from 'react';
import style from '../Auth.module.css';

export const Logout = () => {
  console.log(style);
  return (
    <button className={style.logout}>Выйти</button>
  );
};
