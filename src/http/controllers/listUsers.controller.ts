import { listAllUsersService } from '@/services/listUsers.service'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export async function handleListAllUsersController(
  app: FastifyInstance,
): Promise<void> {
  await app.get(
    '/list',
    async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
      const users: string[] = await listAllUsersService()
      if (users.length === 0) return reply.status(204).send('Empty list')
      await reply.status(200).send(users)
    },
  )
}
