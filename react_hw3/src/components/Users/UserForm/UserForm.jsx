import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useUser from "./../../../hooks/useUser";

export default function UserForm({ userChanges }) {
  const { id } = useParams();
  const { user, changeInput, changeUser, createUser } = useUser(id);
  const history = useHistory();
  const submitForm = async (e) => {
    e.preventDefault();
    userChanges ? await changeUser() : await createUser();
    history.push("/");
  };
  const cancelBtn = () => history.push("/");

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>
          Name{" "}
          <input
            type="text"
            name="name"
            defaultValue={user.name}
            onBlur={changeInput}
          />
        </label>
      </div>
      <div>
        <label>
          Username{" "}
          <input
            type="text"
            name="username"
            defaultValue={user.username}
            onBlur={changeInput}
          />
        </label>
      </div>
      <div>
        <label>
          email{" "}
          <input
            type="email"
            name="email"
            defaultValue={user.email}
            onBlur={changeInput}
          />
        </label>
      </div>
      <div>
        <label>
          City{" "}
          <input
            type="text"
            name="city"
            defaultValue={user.city}
            onBlur={changeInput}
          />
        </label>
      </div>
      <div>
        <label>
          Street{" "}
          <input
            type="text"
            name="street"
            defaultValue={user.street}
            onBlur={changeInput}
          />
        </label>
      </div>
      <div>
        <button> Save </button>
        {userChanges && (
          <button type="button" onClick={cancelBtn}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
