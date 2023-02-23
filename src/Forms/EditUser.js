// import { useState } from "react";
import { useState,useEffect } from "react";
 import React from 'react'

const EditUserForm = (props)=>{
   const [user,setUser] = useState(props.currentUser)

   useEffect(()=>{
        setUser(props.currentUser)
   },[props])

   const handleInputChange = (event)=>{
    const {name,value} = event.target

    setUser({...user,[name]:value})
    }

    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if(!user.name||!user.age||!user.gender) return;
                props.updateUser(user.id,user);
            }
        }>
            <label>Name</label>
            <input type="text" onChange={handleInputChange} name="name" value={user.name} />
            <label>Age</label>
            <input type="text" onChange={handleInputChange} name="age" value={user.age} />
            <label>Gender</label>
            <input type="text" onChange={handleInputChange} name="gender" value={user.gender} />
            <button>Update user</button>
            <button className="button muted-button" onClick={()=>{
                props.setEditing(false)
            }}>Cancel</button>
          </form>
    )
}

export default EditUserForm;





