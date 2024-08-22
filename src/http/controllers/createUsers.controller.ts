import { bodyValidate } from '@/lib/validators/userBodyRequest.validator'
import { createUsersService } from '@/services/createUsers.service'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export async function handleCreateUserController(
  app: FastifyInstance,
): Promise<void> {
  app.post('/create', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      // tentando receber o corpo da requisição de forma validada

      // se body não existir então o erro esta do lado do cliente
      if (!request.body) return reply.status(400).send('Error: empty body')
      const validatedBodyRequest = bodyValidate(request.body)
      // se corpo existir mas não estiver valido o erro ainda é do lado cliente pois esta enviando dados invalidos.
      if (!validatedBodyRequest)
        return reply.status(400).send('Invalid data body')
      // caso corpo seja valido, vamos tentar criar o usuario
      await createUsersService(validatedBodyRequest)
      return reply.status(201).send('User created')
    } catch (err) {
      // se ocorrer um erro na tentativa de receber o corpo da requisição
      // então o erro é do lado do servidor
      console.log('Error creating user', err)
      return reply.status(500).send('Internal server error')
    }
  })
}
