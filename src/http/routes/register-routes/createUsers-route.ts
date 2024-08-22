import { handleCreateUserController } from '@/http/controllers/createUsers.controller'
import { FastifyInstance } from 'fastify'

export async function routeCreateUsers(app: FastifyInstance) {
  await app.register(handleCreateUserController)
}
