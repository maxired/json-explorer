import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './index.module.css'; /*
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  RefinementList,
} from 'react-instantsearch-dom';
*/

const Highlight = ({ attribute, hit }) => (
  <div className={style.highlight}>
    {attribute} :{' '}
    {typeof hit[attribute] === 'string'
      ? hit[attribute]
      : JSON.stringify(hit[attribute])}
  </div>
);

function Hit(props) {
  const {
    hit: { title, name, ...attributes },
  } = props;

  return (
    <article className={style.hit}>
      {(title || name) && (
        <div className={style.hitTitleLine}>
          <h1 className={style.title}>
            <div className={style.highlight}>{title}</div>
            <div className={style.highlight}>{name}</div>
          </h1>
        </div>
      )}
      {Object.keys(attributes).map(attribute => (
        <p key={attribute}>
          <Highlight attribute={attribute} hit={props.hit} />
        </p>
      ))}
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;
