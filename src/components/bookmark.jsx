import React from "react";

const Bookmark=({toggle,id})=>{
    const createIcon=()=>{
        return <i className="bi bi-bookmark-heart-fill"></i>
    }

    return <button  onClick={(e)=>toggle(e,id)} ><i className="bi bi-bookmark"></i></button>
}

export default Bookmark