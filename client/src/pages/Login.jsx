import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export const Login = () => {
  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:4500/api/auth/login', User);
      
      // Store the token (optional but recommended)
      localStorage.setItem("token", response.data.token);

      alert("Login Successful");
      setUser({ email: "", password: "" });
      
      navigate("/Admission");
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <section>
      <main>
        <div className="login-form">
          <h1 className="login-heading">Please Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"  
                placeholder="Enter Your Email"
                id="email"
                required
                value={User.email}
                onChange={(e) => setUser({ ...User, email: e.target.value })}
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
                onChange={(e) => setUser({ ...User, password: e.target.value })}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default Login;
