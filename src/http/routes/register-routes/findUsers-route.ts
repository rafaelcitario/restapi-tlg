import { handleFindUserController } from '@/http/controllers/findUsers.controller'
import { FastifyInstance } from 'fastify'

export async function routeUsersFindUser(app: FastifyInstance): Promise<void> {
  await app.register(handleFindUserController)
}
