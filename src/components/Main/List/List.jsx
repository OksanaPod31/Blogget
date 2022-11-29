import React from 'react';
import style from './List.module.css';
import Post from './Post';
import {useBest} from '../../../hooks/useBest';
// import {useEffect} from 'react';

export const List = () => {
  // const postsData = useBest();
  // console.log(postsData);
  const [postsData] = useBest([]);
  // const datPost = postsData.data.children;
  console.log(postsData);
  console.log(postsData.type);

  /* useEffect(() => {
    console.log('эффект');
    if (postsData !== []) {
      console.log(postsData.data.children, ' - children');
    }
  });*/

  // console.log(datPost);

  return (
    <ul className={style.list}>
      {
        postsData.map((postData) => (
          <Post key={postData.id} postData={postsData} />
        ))
      }
    </ul>
  );
};
