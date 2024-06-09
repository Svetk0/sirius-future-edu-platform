import React from "react";
import { useSelector } from "react-redux";

import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ruLocale from "@fullcalendar/core/locales/ru";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";

import styles from "./ScheduleStudentPage.module.scss";

const ScheduleStudentPage = () => {
 
   

    const eventsInitial = useSelector((state)=> state.schedule.events);
    console.log("store: ", eventsInitial);

  const events = eventsInitial.map((event) => {
    const id = Math.floor(Math.random() * eventsInitial.length);
    return {
      id: id,
      title: event.subject + "\n" + event.schedule,
      start: event.start,
    };
  });

  console.log("events: ", events);

  return (
    <>
      <Fullcalendar
        plugins={[dayGridPlugin]}
        locale={ruLocale}
        events={events}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
      />
    </>
  );
};

export default ScheduleStudentPage;
