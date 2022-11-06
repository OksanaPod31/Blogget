import React from 'react';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'Nickname',
    ups: 24,
    date: '2022-02-24T00:45:00.00Z',
  };

  return (
    <ul className={style.List}>
      <Post postData={postData} />
    </ul>
  );
};