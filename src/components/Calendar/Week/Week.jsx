import {addDays} from "date-fns";
import React from "react";
import Day from "./../Day/Day";
import styles from "./Week.module.scss";
 
const Week = (props) => {
  const { firstDayOfWeek } = props;

  const days = new Array(7).fill(null).map((_, i) => {
    return <Day day={addDays(firstDayOfWeek, i)} />;
  });

  return <div className={styles.week}>{days}</div>;
};

export default Week;
