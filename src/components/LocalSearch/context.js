import React from 'react';

const LocalSearchContext = React.createContext({
  data: [],
  toggleFilter: () => {},
  filters: {},
});

export default LocalSearchContext;
