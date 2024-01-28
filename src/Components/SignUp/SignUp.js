import React, { useState } from 'react'
import './signup.css'
// import { useNavigate } from 'react-router-dom'

function SignUp() {
  // const navigate = useNavigate()
  // const handleSignUp = (e) =>{
  //   e.preventDefault()
  //   navigate('/home')
  // }

  const [action, setAction] = useState('SignIn');

  return (
    <div className='SignUp'>
        <div className="page-info">
        <h1>{action}</h1>
        <h3>New user? {action} Here!</h3>
        </div>

        {action === 'SignIn'? <div className='user-info'>
            <h2>Email-id</h2>
            <input type="email"/>

            <h2>Password</h2>
            <input type="password"/></div> :  <div className="user-info">
            <h2>Name</h2>
            <input type="text"/>

            <h2>Email-id</h2>
            <input type="email"/>

            <h2>Password</h2>
            <input type="password"/>
          </div>}

        <div className="user-info">

            <div className="signup-signin-container">
              <div className="submit">
                <button onClick={() => {setAction('SignUp')}} className={action === 'SignIn'?'submit > button gray':'submit > button'} >SignUp</button>
              </div>

              <div className="submit">
                <button onClick={() => {setAction('SignIn')}} className={action === 'SignUp'?'submit > button gray':'submit > button'}>SignIn</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp