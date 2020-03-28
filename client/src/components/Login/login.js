// import React, { useState } from "react";
// import { Button, FormGroup, FormControl,} from "react-bootstrap";
// import "./login.css";

// export default function Login(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <form onSubmit={handleSubmit}>
//         <FormGroup controlId="email" bsSize="large">
//           <label>Email</label>
//           <FormControl
//             autoFocus
//             type="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup controlId="password" bsSize="large">
//           <label>Password</label>
//           <FormControl
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             type="password"
//           />
//         </FormGroup>
//         <Button block bsSize="large" disabled={!validateForm()} >
//           Login
//         </Button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Input, TextArea, FormBtn, label} from "../Form";
import API from "../../utils/API";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";


export default function login(props) {

  const [signup, setSignup] = useState([])
  const [formObject, setFormObject] = useState({})

  function validateForm() {
    if(formObject && formObject.email && formObject.password) {
      return formObject.email.length > 0 && formObject.password.length > 0;
    }
    return false;
  }
  // Setting our component's initial state

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    console.log(formObject);
    event.preventDefault();
    if (formObject.email && formObject.password) {
      API.saveSignUp({
        email: formObject.email,
        password: formObject.password,

      })
        .then(res => {
          console.log(res)
          setFormObject({})
          window.location.replace("/")
        })
        .catch(err => console.log(err))
    }
  };


  return (
    <div className="Login">
      <form>
        {/* <FormGroup controlId="email" bsSize="large"> */}
        <label>Email</label>
        {/* <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          /> */}
        <Input
          onChange={handleInputChange}
          name="email"
          placeholder="email (Required)"
          value={formObject.email}
        />

        {/* </FormGroup> */}
        {/* <FormGroup controlId="password" bsSize="large"> */}
        <label>Password</label>
        {/* <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          /> */}
        <Input
          onChange={handleInputChange}
          name="password"
          placeholder="Password (required)"
          value={formObject.password}
        />
        {/* </FormGroup> */}
        {/* <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button> */}

        <FormBtn
          disabled={!validateForm()}
          // disabled={!(formObject.suburb && formObject.nameOfStore)}
          onClick={handleFormSubmit}
        >
          Submit
              </FormBtn>
      </form>
    </div>
  )
}  
