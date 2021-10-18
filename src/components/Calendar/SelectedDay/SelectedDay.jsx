import format from 'date-fns/format';
import React from 'react';

const Selectedday = (props) => {
  return (
    <div>
      <h2>{format(props.currentDate,'EEEE')}</h2>
      <h1>{format(props.currentDate, 'd')}</h1>
    </div>
  );
}

export default Selectedday;
