
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Welcome to the Service Platform</h1>
      <div className="d-flex justify-content-center gap-3">
        <Link to="/signup" className="btn btn-success">Signup</Link>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </div>
    </div>
  );
}

export default Home;
