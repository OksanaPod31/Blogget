import {React, useState, useContext} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthImg} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {Logout} from './Logout/Logout';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';


export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [comp, setComp] = useState(false);
  const {auth} = useContext(authContext);
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
            <a href='/home'>
              <Logout />
            </a>
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

