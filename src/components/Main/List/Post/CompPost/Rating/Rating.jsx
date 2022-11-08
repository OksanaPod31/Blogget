import React from 'react';
import style from '../../Post.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../../UI/Text';

export const Rating = (props) => {
  console.log(style);
  return (
    <div className={style.rating}>
      <Text As='button' bwidth={20}
        className={style.up} aria-label='Увеличить рейтинг' />
      <p className={style.ups}>{props.ups}</p>
      <Text As='button' bwidth={20}
        className={style.down} aria-label='Понизить рейтинг'/>
    </div>
  );
};

Rating.propTypes = {
  ups: PropTypes.number,
};
