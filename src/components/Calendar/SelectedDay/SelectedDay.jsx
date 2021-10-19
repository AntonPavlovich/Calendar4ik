import format from 'date-fns/format';
import React from 'react';

import styles from './SelectedDay.module.scss'

const Selectedday = (props) => {
  

  return (
    <div className={styles.selectedDay}>
      <h2>{format(props.selectedDay,'EEEE')}</h2>
      <h1>{format(props.selectedDay, 'd')}</h1>
    </div>
  );
}

export default Selectedday;
