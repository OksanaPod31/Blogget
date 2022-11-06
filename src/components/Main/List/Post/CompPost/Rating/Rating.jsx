import React from 'react';
import style from '../../Post.module.css';
import PropTypes from 'prop-types';

export const Rating = (props) => {
  console.log(style);
  return (
    <div className={style.rating}>
      <button className={style.up} aria-label='Увеличить рейтинг' />
      <p className={style.ups}>{props.ups}</p>
      <button className={style.down} aria-label='Понизить рейтинг'/>
    </div>
  );
};

Rating.propTypes = {
  ups: PropTypes.number,
};
