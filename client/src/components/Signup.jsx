import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal'
import '../App.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:4000/adduser', {
              email,
              username,
              password,
          });
          console.log('user added', response.data);
          setMessage(`Welcome ${response.data.username}, you may login now.`);
          setMessageType('success');

      } catch (error) {
          console.error(error);
          if (error.response) {
            setMessage(error.response.data.error);
          } else {
              setMessage('An error occurred');
          }
          setMessageType('error');
      }
  }

  return (
    <Fragment>
      <form className="form" onSubmit={handleSubmit}>
        {message && (
            <div className={`message ${messageType}`}>
                {message}
            </div>
        )}
        <span className="input-span">
            <label for="email" className="label">Email</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                name="email"
                id="email"
                />
        </span>
        <span className="input-span">
            <label for="username" className="label">Username</label>
            <input
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                name="username"
                id="username"
                />
        </span>
        <span className="input-span">
          <label for="password" className="label" >Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            name="password"
            id="password"
            />
        </span>
        <input className="submit" type="submit" value="Sign up"></input>
        <span className="span">Already have an account? <Link to="/" className="link">Log in</Link></span>
      </form>
    </Fragment>
  )
}
