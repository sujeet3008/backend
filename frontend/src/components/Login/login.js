// Login.js
import React, { useState } from "react";
// import { assests } from "../../assest/assest";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase/FirbaseConfig";
import "../Login/login.css"; 


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    alert("login successful");

    // Firebase login
    // try {
    //   await signInWithEmailAndPassword(auth, formData.email, formData.password);
    //   console.log("Login successful:", formData);
    // } catch (error) {
    //   console.error("Error logging in:", error);
    // }
  };

  return (
    <section id="login">
      <div className="container mx-auto p-4">
        <div className="bg-white p-4 max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={assests.f2} alt="login" className="img-fluid" />
          </div>
          <form className="pt-5">
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleOnChange}
                required
                placeholder="Enter email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleOnChange}
                  required
                  placeholder="Enter password"
                  className="form-control"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <Link
                to={"/forget_password"}
                className="block ml-auto mt-2 text-secondary text-decoration-none"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="button"
              onClick={handleOnSubmit}
              className="btn-a"
            >
              Login
            </button>
          </form>
          <p className="my-4">
            Don't have an account?{" "}
            <Link to={"/SignUp"} className="text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
