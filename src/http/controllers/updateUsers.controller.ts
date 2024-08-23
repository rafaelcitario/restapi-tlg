import { bodyValidate } from '@/lib/validators/userBodyRequest.validator'
import { paramsValidator } from '@/lib/validators/userParamsRequest.validator'
import { updateUsersService } from '@/services/updateUsers.service'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export async function handleUpdateUsersController(app: FastifyInstance) {
  app.put(
    '/account/:id',
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        if (!request.params) return reply.status(400).send('Invalid params')
        const validatedParams = paramsValidator(request.params)
        const validateBodySchema = await bodyValidate(request.body)

        // verificando se os dados de params e body foram validados
        if (validatedParams === null)
          return reply.status(400).send('Invalid params')
        if (validateBodySchema === null)
          return reply.status(400).send('Invalid body')

        // passando id de parametros e body para o service de atualização
        const updateOrNull = await updateUsersService(
          validatedParams,
          validateBodySchema,
        )

        const codeStatus = updateOrNull !== null ? 200 : 400
        const message =
          codeStatus === 200
            ? 'Updated'
            : 'Unable to perform the update. Please check that all data is correct.'
        return reply.status(codeStatus).send(message)
      } catch (err) {
        console.log('Error updating user', err)
        return reply.status(500).send('Internal server error')
      }
    },
  )
}
