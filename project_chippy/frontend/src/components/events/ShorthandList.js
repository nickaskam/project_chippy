import React from "react";

function ShorthandList(props) {
  if (this.props.events) {
    var eventNames = this.props.event.map(function (event) {
      return (
        <div>
          <ol>
            <li>{event.name}</li>
          </ol>
        </div>
      );
    });
  }
}

export default ShorthandList;
