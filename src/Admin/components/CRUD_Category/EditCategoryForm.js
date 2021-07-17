import React, { useState, useEffect } from "react";
import { Form } from 'react-bootstrap';
import axios from 'axios';

const EditCategoryForm = props => {
  const initialFormState = { id: null, name: "" };
  const [user, setUser] = useState(props.currentUser);
  const [newCategory, setnewCategory] = useState({ id: 0, name: '' });
  useEffect(
    () => {
      setUser(props.currentUser);
    },
    [props]
  );

  useEffect(() => {
    setUser(props.currentUser);
  }, []);


  const handleInputChange = event => {
    const { name, value } = event.target;
    console.log('handlechange', value)
    setnewCategory({ id: user.id, name: value });
    console.log('handlechangeCat', newCategory)
  };

  const updateUsers = async (id, updateduser) => {
    console.log('in updateUser method', updateduser)
    await axios.put(`http://127.0.0.1:8000/api/categories/${id}`, updateduser)
      .then(response => {
        console.error('all cat', response.data)
        props.setRefresh(!props.refresh)
      }).catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <Form inline
      onSubmit={event => {
        event.preventDefault();
      }}
    >
      <Form.Label>Name</Form.Label>
      <input
        className="form-control mx-sm-3"
        type="text"
        name="name"
        defaultValue={user.name}
        onChange={handleInputChange}
      />

      <button className="btn btn-inline"
        style={{ backgroundColor: 'pink' }}
        onClick={() => updateUsers(newCategory.id, newCategory)}>
        Update Category</button>
      <button
        onClick={() => props.setEditing(false)
        }
        className="btn btn-inline"
        style={{ backgroundColor: 'rgb(240, 18, 155)', color: 'black' }}
      >
        CANCEL
      </button>
    </Form>
  );
};

export default EditCategoryForm;
