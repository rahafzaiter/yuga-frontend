import React, { useState } from "react";
import CategoryTable from "./tables/CategoryTable";
import AddCategoryForm from "./CRUD_Category/AddCategoryForm";
import EditCategoryForm from "./CRUD_Category/EditCategoryForm";
import Box from '@material-ui/core/Box';

const CategoryList = () => {
  const usersData = [
    { id: 1, name: "pant" },
    { id: 2, name: "shirt"},
    { id: 3, name: "dress" },
    { id: 4, name: "chemis" },
    { id: 5, name: "blouse" }

  ];
  

  // usersの状態
  const [users, setUsers] = useState(usersData);

  // 更新関数を持つ追加メソッド
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  // 更新関数を持つ削除メソッド
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  // 編集状態か判断するための状態
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: ""};
  // 編集中の現在のユーザの状態（編集中ユーザーを知るため）
  const [currentUser, setCurrentUser] = useState(initialFormState);

  // 編集モードをONにスイッチして現在のユーザー情報をセットする関数
  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name});
  };

  // 編集後に更新投稿する関数
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  };

  return (
      <div class="container">
         <h4 className=" py-2 shadow">View Category</h4>
        <div>
          {editing ? (
            <Box style={{ width: '100%' }}>
              <h2>Edit Category</h2>
              <EditCategoryForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
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

          <CategoryTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </Box>
      </div>
   
  );
};

export default CategoryList;
