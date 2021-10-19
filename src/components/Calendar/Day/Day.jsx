import React, { useContext } from "react";
import { format, isSameMonth } from "date-fns";
import selectedDayContext from "../../../contexts/context";
import styles from "./Day.module.scss";

const Day = (props) => {
  const { day } = props;

  const [setSelectedDay, currentDate] = useContext(selectedDayContext);

  const someOfThisDay = isSameMonth(day, currentDate) ? (
    <div
      className={styles.day}
      onClick={() => {
        setSelectedDay(day);
      }}
    >
      {format(day, "d")}
    </div>
  ) : (
    <div className={styles.day}></div>
  );

  return <>{someOfThisDay}</>
};

export default Day;
