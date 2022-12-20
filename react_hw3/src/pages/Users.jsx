import React, { Fragment } from "react";
import UsersList from "../components/Users/UsersList/UsersList";
import { Link } from "react-router-dom";

export default function Users() {
  return (
    <Fragment>
      <h1>Users</h1>
      <UsersList />
      <Link to="/createuser">
        <button>Create User</button>
      </Link>
    </Fragment>
  );
}
