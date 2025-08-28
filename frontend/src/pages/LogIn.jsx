import React, { useState } from 'react';

// The main App component for the login page.
// It includes the full layout and form for user authentication.
const Login = () => {
  // State variables to store the user's form input.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle the form submission.
  const handleLogin = (event) => {
    // Prevent the default form submission behavior which reloads the page.
    event.preventDefault();

    // This is where you would typically connect to a backend API to authenticate the user.
    // For example, you could use a library like Firebase Auth or make a fetch call to your server.
    // The data to be sent would be: { email, password }.
    console.log('Attempting to log in with the following details:');
    console.log('Email:', email);
    console.log('Password:', password); // Note: Never log the password in a real application!

    // Reset the form fields after submission.
    setEmail('');
    setPassword('');
  };

  return (
    // The main container for the login page.
    // It's centered on the screen and uses a gradient background.
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 font-sans p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-2">Welcome Back!</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Sign in to your account.</p>
        </div>

        {/* The login form */}
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          {/* Email Address Input Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
            />
          </div>

          {/* Password Input Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
            />
          </div>

          {/* Forgot Password Link
          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
              Forgot your password?
            </a>
          </div> */}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-105"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Link to signup page */}
        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Don't have an account?{' '}
          <a href="./SignUp" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
