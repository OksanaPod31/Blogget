import React from 'react';
import style from './Tabs.module.css';
// import PropTypes from 'prop-types';
import {useState} from 'react';
import {assignId} from '../../../utils/generateRandomId';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {useEffect} from 'react';
import {debounceRaf} from '../../../utils/debounce';
import {Text} from '../../../UI/Text';

const LIST = [
  {value: 'Главная', Icon: HomeIcon},
  {value: 'Топ', Icon: TopIcon},
  {value: 'Лучшие', Icon: BestIcon},
  {value: 'Горячие', Icon: HotIcon},
].map(assignId);


export const Tabs = () => {
  const [tit, setTit] = useState('add item');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debouncerEsize = debounceRaf(handleResize);
    debouncerEsize();
    handleResize();
    window.addEventListener('resize', debouncerEsize);
    return () => {
      window.removeEventListener('resize', debouncerEsize);
    };
  }, []);


  return (
    <div className={style.container}>
      {
        isDropdown && (
          <div className={style.wrapperBtn}>
            <button className={style.btn}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              {tit}
              <ArrowIcon />
            </button>
          </div>
        )}

      { (isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({value, id, Icon}) => (
            <li className={style.item} key={id}>
              <Text As='button'
                className={style.btn} onClick={() => {
                  const s = value;
                  console.log(s);
                  setTit(s);
                } }>
                {value}
                {Icon && <Icon width={30} height={30} />}
              </Text>
            </li>
          ))}
        </ul>)}
    </div>
  );
};
