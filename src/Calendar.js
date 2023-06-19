import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import { eventData } from "./eventData";

import "./Calendar.scss";

function Calendar() {
  const handleEventClick = (clickInfo) => {};

  const handleGetEvents = (fetchInfo, successCallback, failureCallback) => {
    successCallback(eventData);
  };

  const renderEventContent = (eventInfo) => {
    var title = eventInfo.event.title;
    var description = eventInfo.event.extendedProps.description;
    return (
      <div className="EventInfo">
        <div className="EventInfo__title">{title}</div>
        <div className="EventInfo__status">{description}</div>
      </div>
    );
  };

  return (
    <div className="Calendar__grid">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth" // listWeek , timeGridWeek
        headerToolbar={{
          left: "prev next title",
          right: "",
        }}
        height={"auto"}
        fixedWeekCount={false}
        editable={false}
        selectable={false}
        selectMirror={true}
        dayMaxEventRows={2}
        events={handleGetEvents}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
      />
    </div>
  );
}

export { Calendar };
