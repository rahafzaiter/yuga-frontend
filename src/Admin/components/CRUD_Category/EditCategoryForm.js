import React, { useState, useEffect } from "react";
import {Form} from 'react-bootstrap';
import { Row, Col, Grid } from 'react-bootstrap';

const EditCategoryForm = props => {
  const initialFormState = { id: null, name: "" };
  const [user, setUser] = useState(props.currentUser);

  useEffect(
    () => {
      setUser(props.currentUser);
    },
    [props]
  );

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Form inline
      onSubmit={event => {
        event.preventDefault();
        props.updateUser(user.id, user);
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
        style={{backgroundColor:'pink'}}>Update category</button>
      <button
        onClick={() => props.setEditing(false)}
        className="btn btn-inline"
        style={{backgroundColor:'#FC3C80',color:'white'}}
      >
        Cancel
      </button>
    </Form>
  );
};

export default EditCategoryForm;
