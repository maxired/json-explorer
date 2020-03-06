import React from 'react';
import LocalSearchContext from './context';

import filterStyle from './filterHits.module.css';
import { filterDataWithFilter } from './utils';

const getGroupedAttributesByCount = (data, filteredData, filters) => {
  const filteredDataSet = new Set(filteredData);

  const groupedAttributesByCount = data.reduce((memo, hit) => {
    Object.keys(hit).forEach(attribute => {
      memo[attribute] = memo[attribute] || {};
      memo[attribute][hit[attribute]] = memo[attribute][hit[attribute]] || {
        total: 0,
        facetCount: 0,
      };
      memo[attribute][hit[attribute]].total += 1;
      memo[attribute][hit[attribute]].facetCount +=
        filteredDataSet.has(hit) || filters[attribute] ? 1 : 0;
    });

    return memo;
  }, {});

  return groupedAttributesByCount;
};

const getFilters = (data, filteredData, filters) => {
  const groupedAttributesByCount = getGroupedAttributesByCount(
    data,
    filteredData,
    filters
  );

  Object.keys(filters).forEach(attribute => {
    const nextFilters = { ...filters };
    delete nextFilters[attribute];

    const nextFilteredData = filterDataWithFilter(data, nextFilters);

    const groupedAttributesByCountWithoutAttribute = getGroupedAttributesByCount(
      data,
      nextFilteredData,
      nextFilters
    );

    groupedAttributesByCount[attribute] =
      groupedAttributesByCountWithoutAttribute[attribute];
  });

  const flatten = Object.keys(groupedAttributesByCount).map(attribute => ({
    name: attribute,
    values: groupedAttributesByCount[attribute],
    number: Object.keys(groupedAttributesByCount[attribute]).length,
  }));

  const filtered = flatten.filter(
    item => item.number > 1 && item.number < (data.length * 2) / 3
  );

  return filtered.sort((a, b) => a.number - b.number);
};

const filterHits = Component => () => (
  <LocalSearchContext.Consumer>
    {({ data, filters, toggleFilter, filteredData }) => {
      const getFilteredData = getFilters(data, filteredData, filters);
      return (
        <Component filters={getFilteredData} toggleFilter={toggleFilter} />
      );
    }}
  </LocalSearchContext.Consumer>
);

export default filterHits;

const FilterHit = ({ filter, toggleFilter }) => (
  <section>
    <h2 className={filterStyle.filterName}>{filter.name}</h2>
    <div className="ais-RefinementList">
      <ul className="ais-RefinementList-list">
        {Object.keys(filter.values).map(value => (
          <li key={value} className="ais-RefinementList-item">
            <label className="ais-RefinementList-label">
              <input
                className="ais-RefinementList-checkbox"
                type="checkbox"
                onChange={e => {
                  toggleFilter({
                    group: filter.name,
                    name: value,
                    value: e.nativeEvent.target.checked,
                  });
                }}
              />
              <span className="ais-RefinementList-labelText">
                {typeof value === 'string' ? value : JSON.stringify(value)}
              </span>
              <span className="ais-RefinementList-count">
                {filter.values[value].facetCount}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export const FilterHits = ({ filters, toggleFilter }) =>
  filters.map(filter => (
    <FilterHit key={filter.name} filter={filter} toggleFilter={toggleFilter} />
  ));

export const ConnectedFilterHits = filterHits(FilterHits);
