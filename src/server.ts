import { FastifyListenOptions } from 'fastify'

import { app } from '@/app'
import { database } from './database'

const opts: FastifyListenOptions = {
  host: 'localhost',
  port: 3000,
}

database()
app.listen(opts, handleServer)
function handleServer(err: Error | null, adress: string): void {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening on ${adress}\n`)
  console.log(`Server listening on ${opts.host}:${opts.port}`)
}
