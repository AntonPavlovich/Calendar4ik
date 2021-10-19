import React from "react";
import DaysOfWeek from "../DaysOfWeek/DaysOfWeek";
import styles from "./CalendarBody.module.scss";
import Month from "./../Month/Month";

const Calendarbody = (props) => {
  const { currentDate } = props;

  return (
    <div className={styles.calendarBody}>
      <DaysOfWeek currentDate={currentDate} />
      <Month currentDate={currentDate}/>
    </div>
  );
};

export default Calendarbody;
