import { database } from '@/database'
import { ParamsSchema } from '../types/params.types'

export async function validateUsersInDatabase(
  params: ParamsSchema,
): Promise<string | null> {
  const db = await database()
  const user = await db.all('select * from users where id = ?', [params.id])
  if (user.length !== 0) return 'OK'
  return null
}
