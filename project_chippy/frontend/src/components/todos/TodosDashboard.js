import React, { Fragment } from "react";
import Todos from "./Todos";

export default function Dashboard() {
  return (
    <Fragment>
      <div className="container">
        <Todos />
      </div>
    </Fragment>
  );
}
