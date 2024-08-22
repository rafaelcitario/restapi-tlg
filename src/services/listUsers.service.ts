import { database } from '@/database'

export async function listAllUsersService(): Promise<string[]> {
  const db = await database()
  const users: string[] = await db.all('SELECT * FROM users')
  return await users
}
