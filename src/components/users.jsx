import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'

import API from "../api";
export const Users=()=>{
    const [users,setUsers]=useState(API.users.fetchAll())
    
    const hendleDelete=(userid)=>{
        
        return setUsers((prevState)=>prevState.filter(user=> user._id!==userid))
    }
    const renderPhrase=(number)=>{
        if(number>4){
            return <span className="badge bg-primary p-1 fs-3 mb-3">{number} человек тусанет с тобой сегодня</span>
        }else if(number>1){
            return <span className="badge bg-primary p-1 fs-3 mb-3">{number} человека тусанут с тобой сегодня</span>
        }
        else if(number  ===1){
                return <span className="badge bg-primary p-1 fs-3 mb-3">{number} человек тусанет с тобой сегодня</span>
        }
        else if(number===0){
            return <span className="badge bg-danger p-1 fs-3 mb-3">Никто с тобой не тусанет :)</span> 
        }
    }
    const renderTags=()=>{
        return users.length !== 0&&<table className="table">
        <thead>
        <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретились,раз</th>
            <th scope="col">Оценка</th>
        </tr>
        </thead>
        <tbody>
        
            {
                users.map(user=>(<tr key={user._id}><td >{user.name}</td>
            <td>{user.qualities.map(qualitie=>(<span key={qualitie._id} className={"mx-1 badge bg-"+qualitie.color}>{qualitie.name}</span> ))}</td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td className="d-flex justify-content-between ">{user.rate}/5 <span  onClick={()=>hendleDelete(user._id)} className="btn btn-danger">Delete</span></td>
            </tr>))}
        </tbody>
        </table>
    }
    
    return (
        
        <React.Fragment >
        <div className="container">
        
        {renderPhrase(users.length)}
        {renderTags()}
            
                </div>
                    </React.Fragment>
    )
}