import React from 'react';
import Hit from './components/Hit';
export const MyHits = ({ hits = [] }) => (
  <div className="ais-Hits">
    <ul className="ais-Hits-list">
      {hits.map(hit => (
        <li className="ais-Hits-item" key={hit.id}>
          <Hit hit={hit} />{' '}
        </li>
      ))}
    </ul>
  </div>
);
