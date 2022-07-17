import React, { useState } from "react";
import SearchStatus from "./components/searchStatus";
import Qualitie from "./components/qualitie";
import api from "./api";
import Users from "./components/users"
const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handeleIcon = (event) => {
    const { target } = event;
    if (target.className === "fs-4 bi bi-bookmark") {
      target.className += "-heart-fill";
    } else {
      target.className = "fs-4 bi bi-bookmark";
    }
  };

  return (
    <>
      <SearchStatus length={users.length} />
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          
          <tbody>
          <Users {...users}      />
            {/* {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  <Qualitie {...user} />
                  
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate} /5</td>
                <td>
                  <i onClick={handeleIcon} className="fs-4 bi bi-bookmark"></i>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      )}
    </>
  );
};

export default App;
