import {URL} from '../api/const';
import {useContext, useEffect, useState} from 'react';
import {tokenContext} from '../context/tokenContext';


export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;
    console.log(token);

    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(responce => responce.json()
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.err(err);
        setAuth({});
        if (responce.status === 401) {
          localStorage.removeItem('bearer');
        }
      }));
  }, [token]);

  return [auth];
};
