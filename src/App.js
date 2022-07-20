import React, { useState } from "react";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";
import api from "./api";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handeleIcon = (event,id) => {
    users.filter(user=>{
      if(user._id===id && event.target.className==="bi bi-bookmark"){
        event.target.className="bi bi-bookmark-heart-fill"
      }else if(user._id===id && event.target.className==="bi bi-bookmark-heart-fill"){
        event.target.className="bi bi-bookmark"
      }
    })
    
    
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
            <Users users={users} onDelete={handleDelete} onToogleIcon={handeleIcon}/>
            
          </tbody>
        </table>
      )}
    </>
  );
};

export default App;
