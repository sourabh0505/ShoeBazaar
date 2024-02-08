import React, { useState } from 'react'
import './signup.css'
import users from '../SignUp/users'

function SignUp({onSignup, onSignin}) {

  const [action, setAction] = useState('SignIn');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSignUpIn = () => {
    handleSignUp();
    handleSignIn();
  }

  const handleSignIn = () => {
    const user = users.find((u) => u.username === username && u.password === password);
    if(user) {
      onSignin(user);
    }else{
      alert('The username and password is invalid!');
    }
  }
  
  const handleSignUp = () => {
    const newUser = {id: users.length + 1, username, password};
    users.push(newUser);
    console.log(users);
    onSignup(newUser);

    if (typeof onSignup === 'function') {
      onSignup(newUser);
    }
  }

  
  return (
    <div className='SignUp'>
        <div className="page-info">
        <h1>{action}</h1>
        <h3>New user? {action} Here!</h3>
        </div>

        {action === 'SignIn'? <div className='user-info'>
            <h2>Name</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>

            <h2>Password</h2>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/></div> :  <div className="user-info">

            <h2>Name</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>

            <h2>Password</h2>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>}

        <div className="user-info">

            <div className="signup-signin-container">
              <div className="submit">
                <button onClick={() => {setAction('SignUp')}} className={action === 'SignIn'?'submit > button gray':'submit > button'} >SignUp</button>
              </div>

              <button onClick={handleSignUpIn} className="submitBtn">Submit</button>

              <div className="submit">
                <button onClick={() => {setAction('SignIn')}} className={action === 'SignUp'?'submit > button gray':'submit > button'}>SignIn</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp