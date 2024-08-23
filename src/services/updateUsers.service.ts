import { database } from '@/database'
import { ParamsSchema } from '@/lib/types/params.types'
import { BodySchema } from '@/lib/types/user.types'
import { validateUsersInDatabase } from '@/lib/validators/usersInDatabase.validator'

export async function updateUsersService(
  params: ParamsSchema,
  body: BodySchema,
): Promise<200 | null> {
  const db = await database()
  const dbActionReturn = await validateUsersInDatabase(params)
  if (dbActionReturn === 'OK') {
    db.run('UPDATE users SET name = ? WHERE id = ?', [body.name, params.id])
    return 200
  }
  return null
}
