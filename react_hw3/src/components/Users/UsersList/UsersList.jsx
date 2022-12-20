import React from "react";
import useUsers from "../../../hooks/useUsers";
import { Link } from "react-router-dom";
import "./../UsersList/style.scss";

export default function UsersList() {
  const { list, removeUser } = useUsers();
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {item.name}
          <Link to={`/${item.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => removeUser(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
