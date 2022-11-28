import {URL} from '../api/const';
import {useContext, useEffect, useState} from 'react';
import {tokenContext} from '../context/tokenContext';

export const useBest = () => {
  const {token} = useContext(tokenContext);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    if (!token) return;
    console.log(token);

    fetch(`${URL}/best`)
      .then(responce => responce.json()
        .then(([show]) => {
          setPostData([show]);
          console.log(postData);
        })
        .catch(err => {
          console.error(err);
          setPostData([]);
          if (responce.status === 401) {
            localStorage.removeItem('bearer');
          }
        }));
  }, [token]);

  return [postData];
};

