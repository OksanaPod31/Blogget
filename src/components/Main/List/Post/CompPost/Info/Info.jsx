import React from 'react';
import style from '../../Post.module.css';
import PropTypes from 'prop-types';

export const Info = (props) => {
  // const {title, author} = postData;
  console.log(style);
  return (
    <div className={style.content}>
      <h2 className={style.title}>
        <a className={style.linkPost} href='#post'>
          {props.title}
        </a>
      </h2>
      <a className={style.linkAuthor} href='#author'>{props.author}</a>
    </div>
  );
};

Info.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
