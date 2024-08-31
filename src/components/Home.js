import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the React Auth Project</h1>
      <Link to="/login" className="text-blue-500 hover:underline">
        Go to Login
      </Link>
      <span className="mx-2">|</span>
      <Link to="/signup" className="text-blue-500 hover:underline">
        Go to Signup
      </Link>
    </div>
  );
}

export default Home;
