import {useEffect, React, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthImg} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {URL} from '../../../api/const';


export const Auth = ({token}) => {
  const [auth, setAuth] = useState({});


  useEffect(() => {
    if (!token) return;
    console.log(token);

    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(responce => responce.json()
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?*$/, '');
        setAuth({name, img});
      }));
  }, [token]);

  return (
    <div className={style.container}>
      {auth.name ?
      (<img src={auth.img} title={auth.name} alt={`Аватар: ${auth.name}`}/>) :
      (
        <Text As='a' href={urlAuth}>
          <AuthImg className={style.svg} />
        </Text>
      )
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string
};

