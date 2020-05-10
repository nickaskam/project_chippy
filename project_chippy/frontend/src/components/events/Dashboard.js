import React, { Fragment } from "react";
import Form from "./Form";
import Events from "./Events";

export default function Dashboard() {
  return (
    <Fragment>
      <div className="container">
        <Form />
        <Events />
      </div>
    </Fragment>
  );
}
