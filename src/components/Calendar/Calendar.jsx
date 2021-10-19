import React, { useState } from "react";
import Selectedday from "./SelectedDay/SelectedDay";
import Calendarbody from "./CalendarBody/CalendarBody";
import styles from "./Calendar.module.scss";
import selectedDayContext from './../../contexts/context'

const Calendar = () => {
  const currentDate = Date.now();

  const [selectedDay, setSelectedDay] = useState(currentDate);


  return (
    <div className={styles.calendar}>
      <selectedDayContext.Provider value={[setSelectedDay,currentDate]}>
        <Selectedday selectedDay={selectedDay} />
        <Calendarbody currentDate={currentDate} />
      </selectedDayContext.Provider>
    </div>
  );
};

export default Calendar;
