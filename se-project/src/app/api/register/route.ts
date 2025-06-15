import Database from 'better-sqlite3';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { email, username, password } = await request.json()

    if (!email || !username || !password) {
      return new Response('Missing fields', { status: 400 })
    }

    const db = new Database('database.sqlite')

    db.prepare(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      username TEXT
    )`).run()

    const existing = db.prepare('SELECT * FROM users WHERE email = ?').get(email)
    if (existing) {
      return new Response('User already exists', { status: 409 })
    }

    const hashed = await bcrypt.hash(password, 10)
    db.prepare(
      'INSERT INTO users (email, password, username) VALUES (?, ?, ?)'
    ).run(email, hashed, username)

    return new Response('User created', { status: 201 })
  } catch (err) {
    console.error('Registration error:', err)
    return new Response('Server error', { status: 500 })
  }
}
