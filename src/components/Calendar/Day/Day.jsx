import React, { useContext } from "react";
import { format, isSameMonth, isSameDay } from "date-fns";
import selectedDayContext from "../../../contexts/context";

import cx from 'classnames'
import styles from "./Day.module.scss";

const Day = (props) => {
  const { day } = props;
  const [setSelectedDay, currentDate,selectedDay] = useContext(selectedDayContext);

  const classnames = cx(styles.day, {
    [styles.selected] : isSameDay(day, selectedDay)
  })

  const someOfThisDay = isSameMonth(day, currentDate) ? (
    <div
      className={classnames}
      onClick={() => {
        setSelectedDay(day);
      }}
    >
      {format(day, "d")}
    </div>
  ) : (
    <div className={classnames}></div>
  );

  return <>{someOfThisDay}</>
};

export default Day;
