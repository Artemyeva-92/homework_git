import React, { Fragment } from "react";
import UserForm from "../components/Users/UserForm/UserForm";

export default function User() {
  return (
    <Fragment>
      <h1>User</h1>
      <UserForm userChanges />
    </Fragment>
  );
}
