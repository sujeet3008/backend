import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../helper";

const Login = ({ setIsAuthenticated }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {

    console.log("Login Data", formData);
    try {
      const response = await fetch(API.adminLogin.url, {
        method: API.adminLogin.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response Data", data); 

      if (response.ok && data.success) {
        alert("Login successful!");
        setIsAuthenticated(true);
        navigate("/app");  
      } else {
        
        setErrorMessage(data.message || "Login failed! Please check your credentials.");
      }
    } catch (error) {
      
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(""); 
    handleLogin();
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md mx-auto">
        <div className="text-center mb-8">
        
          <img src="/path/to/logo.png" alt="Logo" className="w-20 h-20 mx-auto rounded-full border-4 border-gray-600 shadow-md" />
          <h2 className="text-3xl font-bold mt-4 text-gray-100">Welcome Back!</h2>
          <p className="text-lg text-gray-400">Please log in to your account</p>
        </div>
        {errorMessage && (
          <div className="bg-red-500 text-white p-3 rounded-lg mb-4">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleOnSubmit}>
          <div className="mb-6">
            <label className="block text-gray-400 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 font-semibold mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleOnChange}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-200"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          {/* <div className="flex justify-between items-center mb-8">
            <Link to="/forget_password" className="text-sm text-indigo-500 hover:underline">
              Forgot password?
            </Link>
          </div> */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-gray-100 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
