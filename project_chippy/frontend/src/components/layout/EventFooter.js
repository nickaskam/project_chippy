import React, { Fragment } from "react";

function EventFooter() {
  return (
    <Fragment>
      <hr></hr>
      <div>
        <h4>Category Key</h4>
        <ul>
          <li className="categoryOne">Work</li>
          <li className="categoryTwo">Fun</li>
          <li className="categoryThree">School</li>
        </ul>
      </div>
      <div>
        <p>Project Chippy is a hobby project created by Nick Askam</p>
      </div>
    </Fragment>
  );
}

export default EventFooter;
