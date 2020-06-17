import React, { Fragment } from "react";
import Todos from "./Todos";
import CreateTodoForm from "./CreateTodoForm";

export default function TodosDashboard() {
  return (
    <Fragment>
      <div className="container">
        <CreateTodoForm />
        <Todos />
      </div>
    </Fragment>
  );
}
