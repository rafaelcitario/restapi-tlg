import { database } from '@/database'
import { ParamsSchema } from '@/lib/types/params.types'
import { validateUsersInDatabase } from '@/lib/validators/usersInDatabase.validator'

export async function findUserService(
  params: ParamsSchema,
): Promise<string[] | null> {
  const db = await database()
  const isUserInDatabase = await validateUsersInDatabase(params)
  if (isUserInDatabase !== null) {
    const user: string[] = await db.all('SELECT * FROM users WHERE id = ?', [
      params.id,
    ])
    return user
  }

  return null
}
