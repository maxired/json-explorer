import React from 'react';
import LocalSearchContext from './context';

const connectHits = Component => () => (
  <LocalSearchContext.Consumer>
    {({ filteredData }) => <Component hits={filteredData} />}
  </LocalSearchContext.Consumer>
);

export default connectHits;
