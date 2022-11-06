import React from 'react';
import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import formatDate from '../../../../utils/formateDate';
import Info from './CompPost/Info';
import Rating from './CompPost/Rating';
import Delete from './CompPost/Delete';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  console.log(title, author, ups, date);

  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt={title} />
      <Info title={title} author={author} />
      <Rating ups={ups}/>
      <Delete />
      <time className={style.date} dateTime={date}>{formatDate(date)}</time>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object
};
