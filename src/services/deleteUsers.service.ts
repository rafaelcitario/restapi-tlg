import { database } from '@/database'
import { ParamsSchema } from '@/lib/types/params.types'

export async function deleteUsersService(
  params: ParamsSchema,
): Promise<200 | null> {
  const db = await database()
  const user = await db.all('select * from users where id = ?', [params.id])

  if (user.length !== 0) {
    await db.run('DELETE FROM users WHERE id = ?', [params.id])
    return 200
  }

  return null
}
