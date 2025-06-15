import Database from 'better-sqlite3';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()
    const db = new Database('database.sqlite')

    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email)

    if (!user) {
      return new Response('Invalid email or password', { status: 401 })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return new Response('Invalid email or password', { status: 401 })
    }

    return new Response('Success', { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response('Server error', { status: 500 })
  }
}
