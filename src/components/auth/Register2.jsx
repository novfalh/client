import React, { useState } from 'react'
import api from '../../utils/api';

const initialState ={
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};



const Register2 = () => {
const [formData, setFormData] = useState(initialState)

// formData : state to hold the form related info.
  // setFormData: is equivalent to setState method from the class based component
  // useState: name of the hook which will help us to declare the state.
  // initialState:to initialize the state with the provided data through object.

//destructuring the state object
const { name, email, password, confirmPassword} = formData;


const onChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
    //setFromData: used to modify/update the state.
    //...formData: ...spread operator. it will leave everthing from the formData into the json object.
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    api
      .post("/users", formData)
      .then((res) => console.log(res.data))
      .catch();
  };



    return (
        <>
        <section class="container">
          <h1 class="x-large text-primary">Sign Up</h1>
          <p class="lead">
            <i class="fa fa-user-circle-o"></i>Create your Account
          </p>
          <form class="form" onSubmit={onSubmit}>
            <div class="form-group">
              <input type="text" placeholder="Enter the Name" name="name"  value={name} onChange={onChange} />
            </div>
            <div className="d-block invalid-feedback"> {   } </div>
           
            <div class="form-group">
              <input type="email" placeholder="enter your email" name="email" value={email} onChange={onChange}   />
           
            </div>
            <div className="d-block invalid-feedback"> {    } </div>
           
            <div class="form-group">
              <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} />
            </div>
            <div className="d-block invalid-feedback"> {   } </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword} onChange={onChange}
              />
            </div>
           
            <div class="form-group">
              <input type="submit" class="btn btn-primary" value="Register" />
            </div>
          </form>
        </section>
      </>
  )

    }
export default Register2