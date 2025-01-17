import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const App = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted");

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    if (!/[!@#$%&*]/.test(password)) {
      setError("Password must contain a special character (!@#$%&*)");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain an uppercase letter");
      return;
    }

    // Reset error and fields
    setError("");
    setEmail("");
    setPassword("");


    toast.success("Login Successful", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75">
      <div className="bg-white rounded p-4 shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center text-dark mb-3">Login</h2>
        <form onSubmit={submitHandler}>
        
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
         

          {error && <div className="alert alert-danger text-center">{error}</div>}

          <button type="submit" className="btn btn-primary w-100">Log In</button>
        </form>

       

        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
