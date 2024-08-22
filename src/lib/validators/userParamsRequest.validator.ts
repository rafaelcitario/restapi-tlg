import { ParamsSchema } from '../types/params.types'

export function paramsValidator(params: unknown): ParamsSchema | null {
  if (typeof params !== 'object' || params === null) return null
  const { id } = params as Record<string, unknown>
  const parsedId = Number(id)
  if (
    typeof parsedId !== 'number' ||
    parsedId < 0 ||
    isNaN(parsedId) ||
    id === ''
  )
    return null
  return { id: parsedId }
}
