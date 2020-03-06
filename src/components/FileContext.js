import React, { useState, useCallback, useContext } from 'react';

const JSONFileContext = React.createContext({
  data: [],
  setData: () => {},
});

export const Consumer = JSONFileContext.Consumer;

export const Provider = ({ ...props }) => {
  const [data, setData] = useState([]);

  return <JSONFileContext.Provider value={{ data, setData }} {...props} />;
};

const getSubData = entries => {
  if (Array.isArray(entries)) {
    return entries;
  } else if (Object.keys(entries).length > 1) {
    return Object.keys(entries).map(key => ({
      name: key,
      value: entries[key],
    }));
  } else {
    const [key] = Object.keys(entries);
    return getSubData(entries[key]);
  }
};

export const FilePicker = () => {
  const { setData } = useContext(JSONFileContext);
  const onChange = useCallback(
    e => {
      const reader = new FileReader();

      const fileName = e.nativeEvent.target.files[0];
      reader.addEventListener('load', () => {
        const entries = JSON.parse(reader.result);
        setData(getSubData(entries));
      });

      reader.readAsText(fileName);
    },
    [setData]
  );

  return <input type="file" onChange={onChange} />;
};

export default JSONFileContext;
