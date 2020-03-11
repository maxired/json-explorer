import React, { useState, useCallback, useContext, useEffect } from 'react';
import { FilePickerComponent } from './FilePickerComponent';

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

const fileContent = {};

export const FilePicker = () => {
  const { setData } = useContext(JSONFileContext);
  const onChange = useCallback(
    files => {
      const reader = new FileReader();
      const file = files[0];

      window.history.pushState(
        { file: file.name },
        file.name,
        `?file=${file.name}`
      );
      reader.addEventListener('load', () => {
        try {
          const entries = JSON.parse(reader.result);
          fileContent[file.name] = entries;
          setData(getSubData(entries));
        } catch {
          window.alert('please select a valid JSON file');
        }
      });

      reader.readAsText(file);
    },
    [setData]
  );

  useEffect(() => {
    window.onpopstate = e => {
      if (e && e.state && e.state.file && fileContent[e.state.file]) {
        setData(fileContent[e.state.file]);
      } else {
        setData([]);
      }
    };
  }, []);
  return <FilePickerComponent onChange={onChange} />;
};

export default JSONFileContext;
