import Database from 'better-sqlite3'
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
	let params = await request.json()
	const db = new Database('database.sqlite') //temp, TODO: use ORM
	const users = db.prepare('SELECT * FROM users WHERE email = ? AND password = ?').all(
		params.email,
		await bcrypt.hash(params.password, 1) //1 for performance, higher for prod
	)

	if(users && users.length == 1){
		return new Response("Success!", {
			status: 200
		})
		//redirect('/home') idk
	} else {
		return new Response("Invalid email or password!",{
			status: 401
		})
	}
	
}