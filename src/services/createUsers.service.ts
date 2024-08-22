import { database } from '@/database'
import { BodySchema } from '@/lib/types/user.types'

export async function createUsersService(data: BodySchema) {
  const db = await database()
  const sqlInsert = `INSERT INTO users (name) VALUES (?)`
  await db.run(sqlInsert, [data.name])
}
