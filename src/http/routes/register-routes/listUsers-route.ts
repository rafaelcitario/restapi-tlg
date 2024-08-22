import { handleListAllUsersController } from '@/http/controllers/listUsers.controller'
import { FastifyInstance } from 'fastify'

export async function routeListAllUsers(app: FastifyInstance) {
  await app.register(handleListAllUsersController)
}
