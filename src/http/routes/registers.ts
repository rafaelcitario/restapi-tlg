import { FastifyInstance } from 'fastify'
import { routeCreateUsers } from './register-routes/createUsers-route'
import { routeDeleteUsers } from './register-routes/deleteUsers-route'
import { routeUsersFindUser } from './register-routes/findUsers-route'
import { routeListAllUsers } from './register-routes/listUsers-route'
import { routeUpdateUsers } from './register-routes/updateUsers-route'

export async function routes(app: FastifyInstance) {
  await app.register(routeListAllUsers, { prefix: '/users' })
  await app.register(routeCreateUsers, { prefix: '/users' })
  await app.register(routeDeleteUsers, { prefix: '/users' })
  await app.register(routeUpdateUsers, { prefix: '/users' })
  await app.register(routeUsersFindUser, { prefix: '/users' })
}
