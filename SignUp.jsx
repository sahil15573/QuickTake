import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const App = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted");

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password and Confirm Password must match");
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
    setFullname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    toast.success("Account Created Successfully", {
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
        <h2 className="text-center text-dark mb-3">Create an Account</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              required
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
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
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && <div className="alert alert-danger text-center">{error}</div>}

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>

        <p className="text-center text-muted mt-3" style={{ fontSize: "12px" }}>
          By registering, you agree to our <a href="#" className="text-primary">Terms & Conditions</a> and <a href="#" className="text-primary">Privacy Policy</a>.
        </p>

        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
