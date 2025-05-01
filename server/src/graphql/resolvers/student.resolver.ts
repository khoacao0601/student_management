import fs from 'fs';
import path from 'path';
import { Student } from '../../model/student_model.js';
import { pubsub } from '../../utils/pubsub.js';

console.log('📥 student.resolver.ts loaded');

const studentsPath = path.join(process.cwd(), 'src', 'data', 'students.json');

const readStudents = (): Student[] => {
  const content = fs.readFileSync(studentsPath, 'utf-8');
  return JSON.parse(content);
};


const writeStudents = (students: Student[]) =>
  fs.writeFileSync(studentsPath, JSON.stringify(students, null, 2), 'utf-8');

export default {
  Query: {
    students: () => {
      const list = readStudents();
      return list;
    },
  },

  Mutation: {
    addStudent: (_: any, args: Student) => {
      const students = readStudents();
      students.push(args);
      writeStudents(students);
      pubsub.publish('STUDENT_ADDED', { studentAdded: args });
      return args;
    },
  },

  Subscription: {
    // asyncIterator is ready on PubSub v1.x
    studentAdded: {
      subscribe: () => pubsub.asyncIterator('STUDENT_ADDED'),
      resolve: (payload: { studentAdded: Student }): Student => {
        return payload.studentAdded;
      },
    },
  },
};
