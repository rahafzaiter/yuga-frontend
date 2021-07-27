import React, { useState ,useEffect } from "react";
import CategoryTable from "./tables/CategoryTable";
import AddCategoryForm from "./CRUD_Category/AddCategoryForm";
import EditCategoryForm from "./CRUD_Category/EditCategoryForm";
import Box from '@material-ui/core/Box';
import axios from 'axios';

const CategoryList = () => {

  const [users, setUsers] = useState(axios.get("http://127.0.0.1:8000/api/categories/"));
  const [refresh,setRefresh]=useState(false);

  var y='';

  const loadUsers = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/categories/");
    setUsers(result.data.reverse()) 
  };

  const addUser = user => {
    const article = user;
    axios.post('http://127.0.0.1:8000/api/categories', article)
        .then(
          response => {
            loadUsers()
          setUsers(
          [...users, response.data.id])
          setRefresh(!refresh)
          })
        .catch(error => {
          setUsers({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
  };

  
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };


  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: ""};

  const [currentUser, setCurrentUser] = useState(initialFormState);


  const editRow = user => {
    setEditing(true);
    y=user;
    setCurrentUser(y);
   
    console.log('setCurrentUser',currentUser)
  };

  useEffect(()=>{
    loadUsers();
  },[refresh])

  useEffect(()=>{
    setCurrentUser(y);
    console.log('setCurrentUser',currentUser)
  },[y])

  return (
      <div class="container"  style={{minHeight:"900px",marginTop:"40px"}}>
         <h4 className=" py-2 shadow">View Category</h4>
        <div>
          {editing ? (
            <Box style={{ width: '100%' }}>
              <h2>Edit Category</h2>
              <EditCategoryForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                refresh={refresh} setRefresh={setRefresh}          
              />
            </Box>
          ) : (
            <Box>
              <AddCategoryForm addUser={addUser} />
            </Box>
          )}
        </div>
        <br/>
        <Box className="center" style={{ width: '100%' }}>
          <CategoryTable users={users} deleteUser={deleteUser} editRow={editRow} refresh={refresh} setRefresh={setRefresh} />
        </Box>
      </div>
   
  );
};

export default CategoryList;
