import { makeExecutableSchema } from '@graphql-tools/schema';
import studentSchema from './schemas/student.schema.js';
import studentResolver from './resolvers/student.resolver.js';
export const schema = makeExecutableSchema({
    typeDefs: [studentSchema],
    resolvers: [studentResolver],
});
