import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
    />
  </label>
);

export default Filter;
