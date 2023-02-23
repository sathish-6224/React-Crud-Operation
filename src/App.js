import UserTable from "./TableComponent/UserTable";
import React, { useState } from 'react';
import Adduser from "./Forms/AddUser";
import EditUser from "./Forms/EditUser";




function App() {

  const intialState =[
  

  ];
const addUsers=(user)=>
{
  user.id=state.length+1;
  setState([...state,user])
}

const removeUser=(id)=>{

  setState(state.filter((state)=>state.id!==id))
  setEditing(false);

}
  const[state,setState] =useState(intialState);
  const [editing,setEditing] = useState(false)
  const initialFormState = {id:null,name:'',age:'',gender:''}
const [currentUser,setCurrentUser]=useState(initialFormState);
 
const editRow = (user)=>{
  setEditing(true);
  setCurrentUser({id:user.id,name:user.name,age:user.age, gender:user.gender});
}

const updateUser=(id,updateUser)=>
{
  setEditing(false);
  setState(state.map((state)=>(state.id===id?updateUser:state)))
}


return (
   <div className="container">
    <h1>React CRUD Operaion Using Hooks</h1>
    <div className="flex-row">
      <div className="flex-large">
        {editing?(<div>
          
          <h2>Edit user</h2>
          <EditUser
  setEditing={setEditing}
  currentUser={currentUser}
  updateUser={updateUser}


/>
          </div>):(<div>
            
            <h2>Add User</h2>
        <Adduser addUser={addUsers} />
            
            </div>)
          }
      </div>
      <div className="flex-large">
        <h2> View User</h2>
        <UserTable editRow={editRow} removeuser={removeUser} state={state} />
      </div>
    </div>
   
   </div>
 

  );
}

export default App;
