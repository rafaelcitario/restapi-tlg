import { handleUpdateUsersController } from '@/http/controllers/updateUsers.controller'
import { FastifyInstance } from 'fastify'

export async function routeUpdateUsers(app: FastifyInstance) {
  await app.register(handleUpdateUsersController)
}
