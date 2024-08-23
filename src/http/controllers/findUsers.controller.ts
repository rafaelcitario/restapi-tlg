import { paramsValidator } from '@/lib/validators/userParamsRequest.validator'
import { findUserService } from '@/services/findUsers.service'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export async function handleFindUserController(
  app: FastifyInstance,
): Promise<void> {
  await app.get(
    ':id',
    async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
      try {
        if (await !request.params)
          return await reply.code(400).send('Invalid params')
        const validatedParams = await paramsValidator(request.query)

        if (validatedParams === null)
          return await reply.code(400).send('Invalid params')
        const user: string[] | null = await findUserService(validatedParams)
        const codeStatus = user !== null ? 200 : 400
        const message = codeStatus !== 200 ? 'User not found' : user
        return await reply.code(codeStatus).send(message)
      } catch (err) {
        console.log('Error finding user', err)
        return await reply.status(500).send('Internal server error')
      }
    },
  )
}
