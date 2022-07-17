import React, { useState } from "react";

const Users = ({props,...rest}) => {
  const propsVal = Object.values(props);
  const [users, setUsers] = useState(propsVal);
  console.log(rest);

  return users.map((user) => (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>{/* <Qualitie {...user} /> */}</td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate} /5</td>
      <td>
        {/* <i onClick={handeleIcon} className="fs-4 bi bi-bookmark"></i> */}
      </td>
      <td>
        <button
          //   onClick={() => handleDelete(user._id)}
          className="btn btn-danger"
        >
          delete
        </button>
      </td>
    </tr>
  ));
};

export default Users;   
