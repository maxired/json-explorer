export const filterDataWithFilter = (data, filters) =>
  data.filter(item =>
    Object.keys(item).every(
      attribute => !filters[attribute] || filters[attribute][item[attribute]]
    )
  );
