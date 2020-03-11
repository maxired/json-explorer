import React, { useCallback } from 'react';
import styles from './filePickerComponent.module.css';

const prevent = e => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};
export const FilePickerComponent = ({ onChange }) => {
  const onDrop = useCallback(
    e => {
      e.preventDefault();
      e.stopPropagation();
      onChange(e.dataTransfer.files);
      return false;
    },
    [onChange]
  );
  return (
    <div
      className={styles.container}
      onDragEnter={prevent}
      onDrop={onDrop}
      onDragOver={prevent}
    >
      <h2>To get started please select or drag a JSON file</h2>
      <input type="file" onChange={e => onChange(e.nativeEvent.target.files)} />
    </div>
  );
};
