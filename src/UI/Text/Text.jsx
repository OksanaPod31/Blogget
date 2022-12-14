import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    onClick,
    bwidth,
    bold,
    medium,
  } = prop;
  const classes = classNames(
    className,
    onClick,
    style[color],
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    {[style[`bold`]]: bold},
    {[style[`medium`]]: medium},
    {[style[`fsbt${bwidth}`]]: bwidth},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fst${dsize}`]]: dsize},
  );

  return <As className={classes} href={href}
    onClick={onClick}>{children}</As>;
};

Text.propTypes = {
  As: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]),
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
  bold: PropTypes.bool,
  medium: PropTypes.bool,

};
