import React from 'react';
import './Login.css';
import {useState} from 'react';
import {useHistory} from 'react-router';
function Login() {
    const [username , setUsername] = useState('');
    const history=useHistory();
    let handleSubmit = (event) =>{
        event.preventDefault();
        history.push({
            pathname: '/movie_dashboard',
            username: username
        })
    }
    localStorage.setItem('userName' , username );
    return (
    <div className = 'login-container'>
        <form method='post' onSubmit={handleSubmit}>  
            <div className="avatar">
			    <img src="https://www.detoxcarpetcleaning.com/wp-content/uploads/2015/01/noavatar.png" alt="Avatar"/>
		    </div>
        <h2 className ="text-center">Login</h2>   
        <div className ="form-group">
        	<input 
            type="text" 
            className="form-control" 
            name="username" 
            placeholder="Username" 
            required="required"
            value={username}
            onChange={(event)=>{setUsername(event.target.value)}}            
            />
        </div>
		<div className="form-group">
            <input
            type="password"
            className="form-control" 
            name="password"
            placeholder="Password" required="required" />
        </div>
        <div className="form-group">
            <input 
            type="submit"
            value = 'Submit' 
            className="btn btn-primary btn-lg btn-block"
            />
        </div>
        </form>
    </div>
    )
}
export default Login;
