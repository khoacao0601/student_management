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
    students: (): Student[] => readStudents(),
    student: (_: any, { student_id }: { student_id: string }): Student | null => {
      return readStudents().find(s => s.student_id === student_id) || null;
    },
  },

  Mutation: {
    addStudent: (_: any, { input }: { input: Student }): Student => {
      const students = readStudents();
      // Push the new student from the input object
      students.push(input);
      writeStudents(students);
      // Publish subscription event
      pubsub.publish('STUDENT_ADDED', { studentAdded: input });
      return input;
    },

    removeStudent: (_: any, { student_id }: { student_id: string }): Student => {
      const students = readStudents();
      const index = students.findIndex(s => s.student_id === student_id);
      if (index === -1) throw new Error(`Student with id ${student_id} not found`);
      const [removed] = students.splice(index, 1);
      writeStudents(students);
      pubsub.publish('STUDENT_REMOVED', { studentRemoved: removed });
      return removed;
    },
  },

  Subscription: {
    studentAdded: {
      subscribe: () => pubsub.asyncIterator('STUDENT_ADDED'),
      resolve: (payload: { studentAdded: Student }) => payload.studentAdded,
    },
    studentRemoved: {
      subscribe: () => pubsub.asyncIterator('STUDENT_REMOVED'),
      resolve: (payload: { studentRemoved: Student }) => payload.studentRemoved,
    },
  },
};
