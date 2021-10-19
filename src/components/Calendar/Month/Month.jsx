import {
  addDays,
  getMonth,
  getWeeksInMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import React from "react";
import Week from "../Week/Week";

const Month = (props) => {
  const firstDayCounter = (i) => {
    if (i === 0) {
      return 0;
    }
    else if (i === 1) {
      return 7;
    }
    else if(i === 2) {
      return 14;
    }
    else if (i === 3) {
      return 21;
    }
    else if (i === 4) {
      return 28;
    }
    else if (i === 5) {
      return 35;
    }
  };

  const { currentDate } = props;
  const amountOfWeek = getWeeksInMonth(currentDate);
  const startingDay = startOfWeek(startOfMonth(currentDate));

  const weeks = new Array(amountOfWeek).fill(null).map((_, i) => {
    return <Week key={i} firstDayOfWeek={addDays(startingDay, firstDayCounter(i))} />;
  }); 

  return <div>{weeks}</div>;
};

export default Month;
