import React, { Fragment } from "react";
import EventCards from "./EventCards";
import EventFooter from "../layout/EventFooter";

//showing the event name in a unordered list
function EventList(props) {
  //setting date to midnight (morning)
  var start = new Date();
  start.setHours(0, 0, 0, 0);

  //setting date to midnight (evening)
  var end = new Date();
  end.setHours(24, 0, 0, 0);

  var eventListPast = props.events
    .slice()
    .filter((event) => {
      if (new Date(event.start_time) < start) {
        return true;
      }
      return false;
    })
    .sort((a, b) => {
      if (a.start_time > b.start_time) {
        return 1;
      } else if (a.start_time < b.start_time) {
        return -1;
      }
      return 0;
    })
    .map((event) => {
      return <RenderEvent key={event.id} event={event} />;
    });

  var eventListToday = props.events
    .slice()
    .filter((event) => {
      if (
        new Date(event.start_time) > start &&
        new Date(event.start_time) < end
      ) {
        return true;
      }
      return false;
    })
    .sort((a, b) => {
      if (a.start_time > b.start_time) {
        return 1;
      } else if (a.start_time < b.start_time) {
        return -1;
      }
      return 0;
    })
    .map((event) => {
      return <RenderEvent key={event.id} event={event} />;
    });

  var eventListFuture = props.events
    .slice()
    .filter((event) => {
      if (new Date(event.start_time) > end) {
        return true;
      }
      return false;
    })
    .sort((a, b) => {
      if (a.start_time > b.start_time) {
        return 1;
      } else if (a.start_time < b.start_time) {
        return -1;
      }
      return 0;
    })
    .map((event) => {
      return <RenderEvent key={event.id} event={event} />;
    });

  function RenderEvent({ event }) {
    return <EventCards event={event} />;
  }

  function RenderEvents() {
    return (
      <Fragment>
        <div className="gridList">
          <div>
            <h2>Past Events</h2>
            <div>{eventListPast}</div>
          </div>
          <div>
            <h2>
              Today's Events (
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date())}
              )
            </h2>
            <div>{eventListToday}</div>
          </div>
          <div>
            <h2>Future Events</h2>
            <div>{eventListFuture}</div>
          </div>
        </div>
        <EventFooter />
      </Fragment>
    );
  }

  return <RenderEvents />;
}

export default EventList;
