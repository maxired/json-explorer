import LocalSearchContext from './context';
import React, { useState, useCallback, useMemo } from 'react';
import { filterDataWithFilter } from './utils';

const LocalSearch = ({ searchClient: { data }, ...props }) => {
  const [filters, setFilters] = useState({});

  const toggleFilter = useCallback(({ group, name, value }) => {
    setFilters(currentFilters => {
      const nextFilters = {
        ...currentFilters,
        [group]: { ...currentFilters[group], [name]: value },
      };

      if (!value) {
        delete nextFilters[group][name];
      }

      if (Object.keys(nextFilters[group]).length === 0) {
        delete nextFilters[group];
      }

      return nextFilters;
    });
  });

  const filteredData = useMemo(() => filterDataWithFilter(data, filters), [
    filters,
    data,
  ]);

  return (
    <LocalSearchContext.Provider
      value={{ data, filters, toggleFilter, filteredData }}
      {...props}
    ></LocalSearchContext.Provider>
  );
};

export default LocalSearch;
