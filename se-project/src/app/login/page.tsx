"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Logged in as: ${email}`);
    console.log({ email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50 px-6">
      <main className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-green-600">👨‍🍳 Chef Social Media</h1>
          <p className="mt-1 text-gray-600 font-semibold">Welcome back! Please log in below.</p>
        </div>

        {message && (
          <p className="mb-4 text-center text-sm text-green-700 bg-green-100 p-2 rounded">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="chef@example.com"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-green-500 px-4 py-2 text-white font-semibold hover:bg-green-600 transition"
          >
            Log In
          </button>
        </form>
      </main>
    </div>
  );
}

