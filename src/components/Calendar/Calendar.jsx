import React from "react";
import Selectedday from "./SelectedDay/SelectedDay";
import styles from './Calendar.module.scss'
import Month from "./Month/Month";
import getWeeksInMonth from "date-fns/getWeeksInMonth";
import getMonth from "date-fns/getMonth";


const Calendar = () => {
  const currentDate = Date.now();
  const weeksAmount = getWeeksInMonth(getMonth(currentDate))

  return <div className={styles.calendar}>
    <Selectedday currentDate={currentDate}/>
    <Month weeksAmount={weeksAmount}/>
  </div>;
};

export default Calendar;
