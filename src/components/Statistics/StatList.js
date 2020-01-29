import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

const StatList = ({ data }) => {
  return (
    <ul className={styles.statList}>
      {data.map(item => {
        return (
          <li className={styles.item} key={item.id}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
};

StatList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

export default StatList;
