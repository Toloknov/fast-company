import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User=(props)=>{
    const {user}=props
    
       return (
        <>
             <tr >
       <td>{user.name}</td>
       <td>
         <Qualitie {...user} />
       </td>
       <td>{user.profession.name}</td>
       <td>{user.completedMeetings}</td>
       <td>{user.rate} /5</td>
       <td>
         <Bookmark id={user._id} toggle={(e)=>props.onToogleIcon(e,user._id)} />
       </td>
       <td>
         <button
           onClick={() => props.onDelete(user._id)}
           className="btn btn-danger"
         >
           delete
         </button>
       </td>
     </tr>
        </>
       )
}

export default User