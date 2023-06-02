import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Link,Route,Routes } from "react-router-dom";
import Masterlist from '../mainpage/Operations/Masterlist';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `./Masterlist`; 
    navigate(path);
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

  return (
    <div className="login-container">
      <div className="login-background"></div>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            {...register('username', { required: true, minLength: 4 })}
          />
          {errors.username && <p className="error-message">Username is required.</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: true,
              minLength: 8,
              pattern: {
                value: passwordRegex,
              },
            })}
          />
          {errors.password && <p className="error-message">Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.</p>}
        </div>
        <div className="form-group">
          
          <Link to="/Masterlist">
          <button type="submit" href='./masterlist'>Login</button>


          </Link>

          <Routes>
            <Route path="/Masterlist" element={<Masterlist/>}/>
          </Routes>
          
          <a className="forgot-password-link" href="/forgot-password">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
