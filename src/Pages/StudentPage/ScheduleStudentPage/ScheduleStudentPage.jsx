import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ruLocale from "@fullcalendar/core/locales/ru";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";

import styles from "./ScheduleStudentPage.module.scss";

const ScheduleStudentPage = () => {
  const eventsInitial = {
    events: [
      {
        title: "Mental ariphmetics",
        start: "2024-06-01",
        schedule: "13:00-13:45",
        subject: "Ментальная арифметика",
        time_start: "13:00",
        duration: "45",
        available: true,
        group: 'math',
      },
      {
        title: "Mental ariphmetics",
        start: "2024-06-02",
        schedule: "13:00-13:45",
        subject: "Ментальная арифметика",
        time_start: "13:00",
        duration: "45",
        available: true,
        group: 'math',
      },
      {
        title: "Mental ariphmetics",
        start: "2024-06-16",
        schedule: "13:00-13:45",
        subject: "Ментальная арифметика",
        time_start: "13:00",
        duration: "45",
        available: true,
        group: 'math',
      },
      {
        title: "Mental ariphmetics",
        start: "2024-06-17",
        schedule: "13:00-13:45",
        subject: "Ментальная арифметика",
        time_start: "13:00",
        duration: "45",
        available: true,
        group: 'math',
      },
      {
        title: "Mental ariphmetics",
        start: "2024-06-07",
        schedule: "13:00-13:45",
        subject: "Ментальная арифметика",
        time_start: "13:00",
        duration: "45",
        available: true,
        group: 'math',
      },
      {
        title: "Robotics",
        start: "2024-06-01",
        schedule: "14:00-14:45",
        subject: "Робототехника",
        time_start: "14:00",
        duration: "45",
        available: true,
        group: 'engineer',
      },
      {
        title: "Robotics",
        start: "2024-06-02",
        schedule: "14:00-14:45",
        subject: "Робототехника",
        time_start: "14:00",
        duration: "45",
        available: true,
        group: 'engineer',
      },
      {
        title: "Robotics",
        start: "2024-06-30",
        schedule: "14:00-14:45",
        subject: "Робототехника",
        time_start: "14:00",
        duration: "45",
        available: true,
        group: 'engineer',
      },
      // etc...
    ],
  };
  console.log("check: ", eventsInitial);

  const events = eventsInitial.events.map((event) => {
    const id = Math.floor(Math.random() * eventsInitial.events.length);
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
