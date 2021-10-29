import {
  addDays,
  getWeeksInMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import React from "react";
import Week from "../Week/Week";

const Month = (props) => {

  const { currentDate } = props;
  const amountOfWeek = getWeeksInMonth(currentDate);
  const startingDay = startOfWeek(startOfMonth(currentDate));

  const weeks = new Array(amountOfWeek).fill(null).map((_, i) => {
    return <Week key={i} firstDayOfWeek={addDays(startingDay, i * 7)} />;
  }); 

  return <div>{weeks}</div>;
};

export default Month;
