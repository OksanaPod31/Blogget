import {URL} from '../api/const';
import {useContext, useEffect, useState} from 'react';
import {tokenContext} from '../context/tokenContext';

export const useBest = () => {
  const {token} = useContext(tokenContext);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    if (!token)console.log('нет токена');
    if (token) {
      fetch(`${URL}/best`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
        .then(responce => responce.json()
          .then((posts) => {
            setPostData(posts);
            console.log(posts, 'оно');
          })
          .catch(err => {
            console.error(err);
            setPostData([]);
            if (responce.status === 401) {
              localStorage.removeItem('bearer');
            }
          }));
    }
  }, [token]);

  return [postData];
};

