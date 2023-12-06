// import React from 'react'
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBInput
// }
// from 'mdb-react-ui-kit';
// const Register = () => {
//   return (
//     <div>
//        <MDBContainer className="my-5">

// <MDBCard>
//   <MDBRow className='g-0'>

//     <MDBCol md='6'>
//       <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
//     </MDBCol>

//     <MDBCol md='6'>
//       <MDBCardBody className='d-flex flex-column'>

//         <div className='d-flex flex-row mt-2'>
//           <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
//           <span className="h1 fw-bold mb-0">Logo</span>
//         </div>

//         <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

//           <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
//           <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

//         <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
//         <a className="small text-muted" href="#!">Forgot password?</a>
//         <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

//         <div className='d-flex flex-row justify-content-start'>
//           <a href="#!" className="small text-muted me-1">Terms of use.</a>
//           <a href="#!" className="small text-muted">Privacy policy</a>
//         </div>

//       </MDBCardBody>
//     </MDBCol>

//   </MDBRow>
// </MDBCard>

// </MDBContainer>
//     </div>
//   )
// }

// export default Register
import React, { useState } from 'react';
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
// import "./assets/cartoon.avif"
const Register = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  return (
    <div>

<MDBContainer fluid className="p-3 my-5">

<MDBRow className='str'>

  <MDBCol col='8' md='4' className='imagestyle'>
    <img src="https://www.shutterstock.com/image-vector/faceless-indian-wedding-couple-together-standing-1815099008"   class="img-fluid" alt="Phone image" />
  </MDBCol>

  <MDBCol col='8' md='4' className='form-style'>


    <MDBInput wrapperClass='mb-2' label='Email address' id='formControlLg' type='email' size="sm" style={{ width: '50%' }}/>
    <MDBInput wrapperClass='mb-2' label='Email address' id='formControlLg' type='email' size="sm" style={{ width: '50%' }}/>

    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="sm" style={{ width: '100%' }}/>


    <div className="d-flex justify-content-between mx-4 mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a href="!#">Forgot password?</a>
    </div>

    <MDBBtn className="mb-4 w-100" size="sm" >Sign in</MDBBtn>


    <div className="divider d-flex align-items-center my-4">
      <p className="text-center fw-bold mx-3 mb-0">OR</p>
    </div>

    <MDBBtn className="mb-4 w-100" size="sm"  style={{backgroundColor: '#3b5998'}}>
      <MDBIcon fab icon="facebook-f" className="mx-2"/>
      Continue with facebook
    </MDBBtn>

    <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
      <MDBIcon fab icon="twitter" className="mx-2"/>
      Continue with twitter
    </MDBBtn>

  </MDBCol>

</MDBRow>

</MDBContainer>
    </div>
  )
}

export default Register