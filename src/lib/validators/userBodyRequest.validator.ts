import { BodySchema } from '../types/user.types'

export function bodyValidate(body: unknown): BodySchema | null {
  if (typeof body !== 'object' || body === null) return null
  // inserindo name dentro de body como unknown
  // falando para body que a chave name é do tipo string e não mais do tipo unknown
  const { name } = body as Record<string, unknown>
  if (typeof name !== 'string' || name.trim() === '') return null
  return { name }
}
