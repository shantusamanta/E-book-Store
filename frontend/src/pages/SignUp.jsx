import React, { useState } from 'react';

const SignUp= () => {
   const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle the form submission.
  const handleSignUp = (event) => {
    // Prevent the default form submission behavior which reloads the page.
    event.preventDefault();

    // Basic validation check. In a real app, you would add more robust validation.
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // This is where you would typically connect to a backend API to create a new user.
    // For example, you could use a library like Firebase Auth or make a fetch call to your server.
    // The data to be sent would be: { fullName, email, password }.
    console.log('Attempting to sign up with the following details:');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password); // Note: Never log the password in a real application!

    // Reset the form fields after submission.
    setFullName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    // The main container for the signup page.
    // It's centered on the screen and uses a gradient background.
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 font-sans p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-2">Create an Account</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Join the world of books!</p>
        </div>

        {/* The signup form */}
        <form onSubmit={handleSignUp} className="mt-8 space-y-6">
          {/* Full Name Input Field */}
          <div>
            <label 
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
            />
          </div>

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
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
            />
          </div>

          {/* Confirm Password Input Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Link to login page */}
        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account?{' '}
          <a href="./Login" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;