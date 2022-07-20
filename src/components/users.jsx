import React from "react";  
import User from "./user";
const Users = (props) => {
  const { users } = props;

  return (
    
    <>
      {users.map((user) => (
        <User user={user} key={user._id} {...props} />
      ))}
    </>
  );
};

export default Users;
