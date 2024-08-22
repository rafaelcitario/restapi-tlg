import { paramsValidator } from '@/lib/validators/userParamsRequest.validator'
import { deleteUsersService } from '@/services/deleteUsers.service'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export async function handleDeleteUsersController(
  app: FastifyInstance,
): Promise<void> {
  app.delete(
    '/delete/:id',
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const validatedParams = paramsValidator(request.params)
        if (validatedParams === null)
          return reply.status(400).send('Invalid params')
        const dbActionReturn = await deleteUsersService(validatedParams)
        const codeStatus = dbActionReturn !== null ? 200 : 400
        return reply
          .status(codeStatus)
          .send(codeStatus === 200 ? 'Deleted' : 'User not found')
      } catch (err) {
        console.log('Error deleting user', err)
        return reply.status(500).send('Internal server error')
      }
    },
  )
}
