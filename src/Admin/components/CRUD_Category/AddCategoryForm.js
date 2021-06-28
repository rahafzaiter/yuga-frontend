import React, { useState } from "react";
import {Form} from 'react-bootstrap';
import { Row, Col, Grid } from 'react-bootstrap';




const AddCategoryForm = props => {
  const initialFormState = { id: null, name: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });

    // localStorage.setItem("categoires",JSON.stringify({user}))
  };

  
  return (
    <Form inline
      onSubmit={event => {
        event.preventDefault();
        if (!user.name) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <Form.Label>Category Name</Form.Label>
    
      <input
        className="form-control mx-sm-3"
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        
      />
       
     
      <button className="btn btn-inline" style={{backgroundColor:'#FC3C80',color:'white'}}>Add new category</button>
    <br/>
    </Form>
  );
};

export default AddCategoryForm;
