import './App.css';
import { useState } from 'react';
import FormInput from './components/FormInput';
//import OtherInputs from './components/OtherInputs';

function App() {

  const [values, setValues] = useState({
    username:"",
    email:"",
    birthday: "",
    password: "",
    confirmPassword:""
  })

  const handleSubmit = (e) => {
      e.preventDefault();
  }

  const onChange = (e) => {
      setValues({...values, [e.target.name]: e.target.value })
  }
 
  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be 3-12 characters and shouldn't include any special character!",
      label:"Username",
      pattern:"^[A-Za-z0-9]{3,12}$",
      required: true
    },

    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"Please add a valid email address!",
      label:"Email",
      required: true
    },

    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      label:"Birthday"
    },

    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character!",
      label:"Password",
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}`,
      required: true
    },

    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Passwords don't match!",
      label:"Confirm Password",
      pattern: values.password,
      required: true
    }
  ]

  console.log(values)
  
  return (
    <div className="App">
      <div className='rainbow'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map(input => (
        <FormInput className="inputBox"
           key={input.id} 
           {...input} value = {values[input.name]} 
           onChange={onChange}
        /> ))}
      {/* <OtherInputs/> */}
        <button  >Submit</button>
      </form>
      </div>
     
    </div>
  );
}

export default App;
