import React, { Fragment } from "react";
import Events from "./Events";

export default function Dashboard() {
  return (
    <Fragment>
      <div className="container">
        <Events />
      </div>
    </Fragment>
  );
}
