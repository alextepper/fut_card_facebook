import axios from "axios";
import React, { useEffect, useState } from "react";
import "./usersList.css";
import UsersListItem from "./UsersListItem";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_GENERAL_URI + "/api/users/all"
        );

        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="usersListContainer">
      <div className="usersListWrapper">
        <ul className="usersList">
          {users.map((user, index) => (
            <UsersListItem key={user._id} user={user} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
