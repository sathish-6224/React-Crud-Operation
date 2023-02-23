import { useState } from "react";
import React from 'react'

 const AddUser= (props)=>{
    const initialFormState = {id:null,name:'',age:'',gender:''}
    const [users,setUsers] =  useState(initialFormState);

    const handleInputEvent = (event)=>{
       const {name,value} = event.target
   

       setUsers({...users,[name]:value})
    }
    return (
    

<form onSubmit={
    event=>
    {
        event.preventDefault();
        if(!users.name||!users.age||!users.gender)return
        props.addUser(users);
        setUsers(initialFormState);
    }
}>
    <label>Name</label>
    <input type="text" onChange= {handleInputEvent}name="name" value={users.name}/>
    <label>Age</label>
    <input type="text" onChange= {handleInputEvent} name="age" value={users.age}/>
    <label>Gender</label>
    <input type="text" onChange= {handleInputEvent} name="gender" value={users.gender}/>
    <button>Add user</button>
</form>

    )
 }


 
export default AddUser;










