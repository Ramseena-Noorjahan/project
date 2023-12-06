import React from 'react'
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

const Login = () => {
  const handleSubmit=(e)=>{

  }

  return (
    <div>
      <MDBContainer fluid className="p-3 my-5">

<MDBRow className='str'>

  {/* <MDBCol col='8' md='4' className='imagestyle'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"   class="img-fluid" alt="Phone image" />
  </MDBCol> */}

  <MDBCol col='8' md='4' className='form-style'>


    <MDBInput wrapperClass='mb-2' label='Email address' id='formControlLg' type='email' size="sm" style={{ width: '100%' }}/>
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

export default Login