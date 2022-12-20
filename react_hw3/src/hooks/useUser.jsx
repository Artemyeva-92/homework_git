import { useState, useEffect } from "react";
import { getUser, updateUser, addNewUser } from "../services/usersService";

export default function useUser(id) {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      id && setUser(await getUser(id));
    })();
  }, []);
  const changeInput = (e) => {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const changeUser = async () => {
    await updateUser(user.id, user);
  };

  const createUser = async () => {
    await addNewUser(user);
  };
  return { user, changeInput, changeUser, createUser };
}
