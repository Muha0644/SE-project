"use client";
import { useState } from "react";
import styles from './login.module.css'

export default function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setMessage(`Login: ${email}, ${password}`);
    console.log({ email, password });
  };

  return (
    <div>
      <main>
        <div>
          <h1>Login</h1>
          {message && <p>{message}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Log In</button>
          </form>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}
