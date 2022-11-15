import {useEffect, React, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthImg} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {URL} from '../../../api/const';
import {Logout} from './Logout/Logout';


export const Auth = ({delToken, token}) => {
  const [auth, setAuth] = useState({});
  const [comp, setComp] = useState(false);
  console.log('удаление', delToken);
  console.log('ссылка', urlAuth);


  const handleInOut = () => {
    if (!comp) {
      setComp(true);
      console.log('лог');
    }

    if (comp) {
      setComp(false);
      console.log('пусто');
    }
  };

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
      }));
  }, [token]);

  return (
    <div className={style.container}>
      {auth.name ?
      (<div>
        <button className={style.btn} onClick={() => handleInOut()}>
          <img className={style.img} src={auth.img} title={auth.name}
            alt={`Аватар: ${auth.name}`}/>
        </button>
        {comp ? (
          <div onClick={() => delToken()}>
            <Logout/>
          </div>
        ) : (
          <div>
            <Text As='span' />
          </div>
        )

        }
      </div>) :
      (
        <Text As='a' className={style.authLink} href={urlAuth}>
          <AuthImg className={style.svg} />
        </Text>
      )
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};

