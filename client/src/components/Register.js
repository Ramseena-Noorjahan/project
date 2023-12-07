// // import React from 'react'
// // import {
// //   MDBBtn,
// //   MDBContainer,
// //   MDBCard,
// //   MDBCardBody,
// //   MDBCardImage,
// //   MDBRow,
// //   MDBCol,
// //   MDBIcon,
// //   MDBInput
// // }
// // from 'mdb-react-ui-kit';
// // const Register = () => {
// //   return (
// //     <div>
// //        <MDBContainer className="my-5">

// // <MDBCard>
// //   <MDBRow className='g-0'>

// //     <MDBCol md='6'>
// //       <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
// //     </MDBCol>

// //     <MDBCol md='6'>
// //       <MDBCardBody className='d-flex flex-column'>

// //         <div className='d-flex flex-row mt-2'>
// //           <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
// //           <span className="h1 fw-bold mb-0">Logo</span>
// //         </div>

// //         <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

// //           <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
// //           <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

// //         <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
// //         <a className="small text-muted" href="#!">Forgot password?</a>
// //         <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

// //         <div className='d-flex flex-row justify-content-start'>
// //           <a href="#!" className="small text-muted me-1">Terms of use.</a>
// //           <a href="#!" className="small text-muted">Privacy policy</a>
// //         </div>

// //       </MDBCardBody>
// //     </MDBCol>

// //   </MDBRow>
// // </MDBCard>

// // </MDBContainer>
// //     </div>
// //   )
// // }

// // export default Register
// import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBBtn,
//   MDBIcon,
//   MDBInput,
//   MDBCheckbox
// }
// from 'mdb-react-ui-kit';
// import "../styles/Register.css"

// const Register = () => {
//   const [name,setName]=useState('')
//   const [email,setEmail]=useState('')
//   const [password,setPassword]=useState('')

//   return (
//     <div>

// <MDBContainer fluid className="p-3 my-5">

// <MDBRow className='str'>

//   <MDBCol col='8' md='4' className='imagestyle'>
//     <img src="https://media.istockphoto.com/id/664771198/vector/fear-of-commitment.jpg?s=612x612&w=0&k=20&c=g4oqxqYVxMKoaNUAGIIyC6tewmq6LrKKRgLcTzU2MEc=https://www.shutterstock.com/image-vector/faceless-indian-wedding-couple-together-standing-1815099008"   class="img-fluid" alt="Phone image" />
   
//   </MDBCol>

//   <MDBCol col='8' md='4' className='form-style'>


//     {/* <MDBInput wrapperClass='mb-2  d-flex justify-content-between' label='name' id='formControlLg' type='namel' size="sm" style={{ width: '48%' }}/>
//     <MDBInput wrapperClass='mb-2' label='Email address' id='formControlLg' type='email' size="sm" style={{ width: '48%' }}/>
//  */}
//  <div className="d-flex justify-content-between mb-2">
//   <MDBInput
//     wrapperClass="d-inline-block mr-2"
//     placeholder="firstname"
//     id="name"
//     type="text"
//     size="sm"
//   />
//   <MDBInput
//     wrapperClass="d-inline-block"
//     placeholder="secondname"
//     id="email"
//     type="text"
//     size="sm"
//   />
  
// </div>

// <div className="d-flex justify-content-between mb-2">
//   <MDBInput
//     wrapperClass="d-inline-block mr-2"
//     placeholder='email'
//     id="email"
//     type="email"
//     size="sm"
//   />
//   <MDBInput
//     wrapperClass="d-inline-block"
//     placeholder="password"
//     id="password"
//     type="password"
//     size="sm"
//   />
  
// </div>


   

   



    

   

//   </MDBCol>

// </MDBRow>

// </MDBContainer>
//     </div>
//   )
// }

// export default Register

import React, { useState } from 'react';
import axios from 'axios'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import "../styles/Register.css"
const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleReset = () => {
    setFname("")
    setLname("")
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   axios.post("http://localhost:3030/api/register",{
    fname,
    lname,
    email,
    password,
    // confirmpaasword
   })
    console.log("Form submitted!");
  };

  return (
    <div>
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow className="str">
          <MDBCol col="8" md="4" className="imagestyle">
            <img
              src="https://media.istockphoto.com/id/664771198/vector/fear-of-commitment.jpg?s=612x612&w=0&k=20&c=g4oqxqYVxMKoaNUAGIIyC6tewmq6LrKKRgLcTzU2MEc=https://www.shutterstock.com/image-vector/faceless-indian-wedding-couple-together-standing-1815099008"
              class="img-fluid"
              alt="Phone image"
            />
          </MDBCol>
          <MDBCol col="8" md="4" className="form-style">
            <div className="d-flex justify-content-between mb-2">
              <MDBInput
                wrapperClass="d-inline-block mr-2"
                placeholder="First Name"
                id="name"
                type="text"
                size="sm"
                onChange={(e) =>
                  //  setFname(e.target.value)
                   console.log(e.target.value)}
                value={fname}
              />
              <MDBInput
                wrapperClass="d-inline-block"
                placeholder="Last Name"
                id="name"
                type="text"
                size="sm"
                onChange={(e) => setLname(e.target.value)}
                value={lname}
              />
            </div>
            <div className="d-flex justify-content-between mb-2">
              <MDBInput
                wrapperClass="d-inline-block mr-2"
                placeholder="Email"
                id="email"
                type="email"
                size="sm"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <MDBInput
                wrapperClass="d-inline-block"
                placeholder="Password"
                id="password"
                type="password"
                size="sm"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <MDBInput
              wrapperClass="mb-2"
              placeholder="Confirm Password"
              id="passwordConfirmation"
              type="password"
              size="sm"
              style={{ width: "100%" }}
            />
            <div className="d-flex justify-content-between">
              <MDBBtn color="danger" size="sm" onClick={handleReset}>
                Reset
              </MDBBtn>
              <MDBBtn color="dark" size="sm" onClick={handleSubmit}>
                Submit
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
export default Register
