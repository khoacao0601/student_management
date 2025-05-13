import { makeExecutableSchema } from '@graphql-tools/schema';

// Schema
import studentSchema from './schemas/student.schema.js';
import authSchema from './schemas/auth.schema.js';

// Resolvers
import studentResolver from './resolvers/student.resolver.js';
import authResolver from './resolvers/auth.resolver.js';


export const schema = makeExecutableSchema({
  typeDefs: [studentSchema, authSchema],
  resolvers: [studentResolver, authResolver],
});
