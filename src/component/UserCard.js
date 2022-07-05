import React from "react";

const UserCard = ({ user }) => {
  console.log("user", user);
  return (
    <div>
      <img src={user.picture.large} alt="user" />
      <ul>
        <li>
          {user.name.first} {user.name.last}
        </li>
        <li>{user.email}</li>
        <li>{user.phone}</li>
      </ul>
    </div>
  );
};

export default UserCard;
