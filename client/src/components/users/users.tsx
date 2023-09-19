import React, { useState, useEffect, useRef } from "react";
import styles from "./users.module.css";
import client from "../../feathers";

interface User {
  _id: string;
  email: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const list = await client.service("users").find();

      setUsers(list.data);
    };

    const updateUsers = (user: User) => {
      setUsers((users) => [...users, user]);
    };

    client.service("users").on("created", updateUsers);
    getUsers();

    return () => {
      client.service("users").removeListener("created", updateUsers);
    };
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className={styles.users}>
      <h3>Users</h3>
      <div className={styles.usersList}>
        {users.map((user) => (
          <div className={styles.userContainer} key={user._id}>
            <div className={styles.user}>{user.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
