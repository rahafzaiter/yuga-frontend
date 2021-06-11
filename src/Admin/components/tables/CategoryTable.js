import React from "react";

const CategoryTable = props => (
  <div className="py-4">
  <table class="table border shadow" >
    <thead style={{backgroundColor:'#CF8E9F'}}>
      <tr>
        <th>id</th>
        <th>Name</th>       
        <th>Actions</th>
      </tr>
    </thead>
    <tbody style={{backgroundColor:'#E5DBE1'}}>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>          
            <td>
              <button
                // className="button muted-button"
                class="btn btn-outline-primary mr-2" 
                onClick={() => props.editRow(user)}
              >
                Edit
              </button>
              <button
               class="btn btn-danger"
                // className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
  </div>
);

export default CategoryTable;
