import React from 'react';
import style from '../../Post.module.css';
import {ReactComponent as DeleteImg} from '../../img/delete.svg';

export const Delete = () => {
  console.log(style);
  return (
    <button className={style.delete}>
      <DeleteImg />
    </button>
  );
};
