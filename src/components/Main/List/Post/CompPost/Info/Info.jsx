import React from 'react';
import style from '../../Post.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../../UI/Text';

export const Info = (prop) => (
  <div className={style.content}>
    <Text As='h2' className={style.title}>
      <Text As='a' size={18} tsize={24} className={style.linkPost} href='#post'>
        {prop.title}
      </Text>
    </Text>
    <Text As='a'
      size={12}
      tsize={14}
      color='orange' className={style.linkAuthor}
      href='#author'>{prop.author}</Text>
  </div>
);

Info.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
