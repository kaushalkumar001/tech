import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        'http://127.0.0.1:4500/api/auth/login', 
        user
      );
      
      // Store both token and user data
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      
      alert("Login Successful");
      setUser({ email: "", password: "" });
      
      // Improved redirection logic
      if (response.data.user.usertype === "admin") {
        navigate("/AllComplains");
      } else {
        navigate("/ComplainPage");
      }
      
    } catch (error) {
      console.error("Login failed:", error);
      alert(error.response?.data?.message || "Login failed. Check credentials.");
    }
  };
  return (
    <section>
      <main>
        <div className="login-form">
          <h1 className="please-heading">Welcome Back! Please Login to </h1>
          <h1 className="continue-heading">Continue</h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"  // Changed to email type for better validation
                name="email"  
                placeholder="Enter Your Email"
                id="email"
                required
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
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
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <button type="submit">Login</button>  {/* Changed text to Login */}
          </form>
        </div>
      </main>
    </section>
  );
};

export default Login;