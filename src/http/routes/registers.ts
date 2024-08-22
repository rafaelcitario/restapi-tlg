import { FastifyInstance } from 'fastify'
import { routeCreateUsers } from './register-routes/createUsers-route'
import { routeDeleteUsers } from './register-routes/deleteUsers-route'
import { routeListAllUsers } from './register-routes/listUsers-route'

export async function routes(app: FastifyInstance) {
  await app.register(routeListAllUsers, { prefix: '/users' })
  await app.register(routeCreateUsers, { prefix: '/users' })
  await app.register(routeDeleteUsers, { prefix: '/users' })
}
