import { type SchemaTypeDefinition } from 'sanity'
import cars from '../model'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars],
}
