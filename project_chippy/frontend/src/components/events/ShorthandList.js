import React from "react";

function EventList(props) {
  const eventlist = props.events.map((event) => {
    return <RenderEvent event={event} key={event.id} />;
  });

  function RenderEvent({ event }) {
    return (
      <div>
        <ul>
          <li>{event.name}</li>
        </ul>
      </div>
    );
  }

  function RenderEvents() {
    return <div>{eventlist}</div>;
  }

  return <RenderEvents />;
}

export default EventList;
