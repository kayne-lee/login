import React, { useState, Fragment } from 'react';
import axios from 'axios';
import '../App.css';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/adduser', {
                username,
                password,
            });
            console.log('user added', response.data);
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <Fragment>
      <form className="signup-form" onSubmit={handleSubmit}>
        <span className="signup-input-span">
            <label for="username" className="signup-label">Username</label>
            <input
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                name="username"
                id="username"
                />
        </span>
        <span className="signup-input-span">
          <label for="password" className="signup-label" >Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            name="password"
            id="password"
            />
        </span>
        <input className="signup-submit" type="submit" value="Sign up"></input>
        <span className="signup-span">Already have an account? <a href="#">Log in</a></span>
      </form>
    </Fragment>
  )
}
