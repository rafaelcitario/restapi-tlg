import { handleDeleteUsersController } from '@/http/controllers/deleteUsers.controller'
import { FastifyInstance } from 'fastify'

export async function routeDeleteUsers(app: FastifyInstance) {
  await app.register(handleDeleteUsersController)
}
