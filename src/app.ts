import fastify, { FastifyInstance } from 'fastify'
import { IncomingMessage, Server } from 'http'
import { routes } from './http/routes/registers'

export const app: FastifyInstance<Server<typeof IncomingMessage>> = fastify()
app.register(routes, { prefix: '/api' })
