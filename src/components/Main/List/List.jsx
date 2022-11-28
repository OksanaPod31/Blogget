import React from 'react';
import style from './List.module.css';
import Post from './Post';
import {useBest} from '../../../hooks/useBest';

export const List = () => {
  const postsData = useBest([]);
  console.log(postsData);
  /* {
      thumbnail: '',
      author: 'Nickname1',
      ups: 77,
      date: '2022-01-21T00:22:00.00Z',
      title: 'Title1',
      id: '123',
    },
    {
      thumbnail: '',
      author: 'Nickname2',
      ups: 58,
      date: '2022-01-31T00:00:00.00Z',
      title: 'Title2',
      id: '156',
    },
    {
      thumbnail: '',
      author: 'Nickname3',
      ups: 24,
      date: '2022-02-24T00:45:00.00Z',
      title: 'Title3',
      id: '165',
    },
    {
      thumbnail: '',
      author: 'Nickname4',
      ups: 124,
      date: '2022-03-10T08:00:00.00Z',
      title: 'Title4',
      id: '178',
    },
  ];*/

  return (
    <ul className={style.list}>
      {
        postsData.map((postData) => (
          <Post key={postData.id} postData={postData} />
        ))
      }
    </ul>
  );
};
