import { format, startOfWeek, addDays } from "date-fns";
import React from "react";
import styles from "./DaysOfWeek.module.scss";

const DaysOfWeek = (props) => {
  const { currentDate } = props;
  const startingDay = startOfWeek(currentDate);

  const days = new Array(7).fill(null).map((_, i) => {
    return (
      <div className={styles.dayOfWeek} key={i}>
        {format(addDays(startingDay, i), "EEEEE")}
      </div>
    );
  });

  return <div className={styles.daysOfWeek}>{days}</div>;
};

export default DaysOfWeek;
