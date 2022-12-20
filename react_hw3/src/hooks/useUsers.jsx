import { useState, useEffect } from "react";
import { getList, deleteUser } from "./../services/usersService";

export default function useUsers() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      setList(await getList());
    })();
  }, []);

  const removeUser = async (id) => {
    await deleteUser(id).then(() => {
      setList((prevState) => prevState.filter((item) => item.id !== id));
    });
  };

  return { list, removeUser };
}
