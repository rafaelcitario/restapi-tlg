import { database } from '@/database'
import { ParamsSchema } from '@/lib/types/params.types'
import { validateUsersInDatabase } from '@/lib/validators/usersInDatabase.validator'

export async function deleteUsersService(
  params: ParamsSchema,
): Promise<200 | null> {
  const db = await database()
  const dbActionReturn = await validateUsersInDatabase(params)
  if (dbActionReturn === 'OK') {
    await db.run('DELETE FROM users WHERE id = ?', [params.id])
    return 200
  }
  return null
}
