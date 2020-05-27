import React from "react";

function EventList(props) {
  const eventlist = props.events.map((event) => {
    return <RenderEvent event={event} key={event.id} />;
  });

  function RenderEvent({ event }) {
    return <li>{event.name}</li>;
  }

  function RenderEvents() {
    return <ul>{eventlist}</ul>;
  }

  return <RenderEvents />;
}

export default EventList;
