import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

export const Login = () => {
  const [User, setUser] = useState({
    email:"",
    password:"",
  });

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post('http://127.0.0.1:4500/api/auth/login',User);
    alert("Login Successfull");
    setUser({
      email:"",
      password:""
    })
    navigate("/Admission");
  }
  

  return (
    <>
     <section>
      <main>
        <div className="login-form">
          <h1 className="login-heading">Please Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="number">Email</label>
              <input
              type="text"
              name="name"
              placeholder="Enter Your Email"
              id="number"
              required
              value={User.email}
              onChange={(e)=>{setUser({...User, email:e.target.value})}}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              id="password"
              required
              value={User.password}
              onChange={(e)=>{setUser({...User, password:e.target.value})}}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
     </section>
    </>
  );
};

export default Login;