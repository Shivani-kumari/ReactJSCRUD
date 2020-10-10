
import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login';
import data from './DummyData';
import Add from './Add';
import AddForm from './AddForm';


export default function App(props) {
  const [name, setName] = useState("")

  const [email, setEmail] = useState("")
  const [profileurl, setProfileurl] = useState("")

  

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    setName(response.profileObj.name)
    setEmail(response.profileObj.email)
    setProfileurl(response.profileObj.imageUrl)

  }





  return (
    <div className="App">
      <GoogleLogin

        clientId="528855993467-v5bqhhje44umovtjsj4g8ipa5q0d5b81.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />


      {name &&
        <div>
          <h1>Welcome {name}</h1>
          <h1>Email : {email}</h1>
          <img src={profileurl} alt={name} />
{/* Add and edit data component of AddForm */}
          <AddForm></AddForm>
        </div>
      }


    </div>

  )

}








