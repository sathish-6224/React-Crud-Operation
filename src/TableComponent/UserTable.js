import React from 'react';
const UserTable=(props)=>
(
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Action</th>

            </tr>
        </thead>
        <tbody>
            {props.state.length>0?(
                props.state.map((state)=>(
<tr key={state.id}>
                <td>{state.name}</td>
                <td>{state.age}</td>
                <td>{state.gender}</td>
<td>
    <button className="buitton muted-button" onClick={()=>props.editRow(state)}>Edit</button>
    <button className="button-muted-button"onClick={()=>props.removeuser(state.id)}>Delete</button>
</td>
            </tr>

                ))
            ):(
                <tr>
                    <td colSpan={4}>No user</td>
                </tr>
            )
            }
            
        </tbody>
    </table>
);

export default UserTable;