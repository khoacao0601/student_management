import fs from 'fs';
import path from 'path';
import { pubsub } from '../../utils/pubsub.js';
console.log('📥 student.resolver.ts loaded');
const studentsPath = path.join(process.cwd(), 'src', 'data', 'students.json');
const readStudents = () => {
    const content = fs.readFileSync(studentsPath, 'utf-8');
    return JSON.parse(content);
};
const writeStudents = (students) => fs.writeFileSync(studentsPath, JSON.stringify(students, null, 2), 'utf-8');
export default {
    Query: {
        students: () => readStudents(),
        student: (_, { student_id }) => {
            return readStudents().find(s => s.student_id === student_id) || null;
        },
    },
    Mutation: {
        addStudent: (_, { input }) => {
            const students = readStudents();
            // Push the new student from the input object
            students.push(input);
            writeStudents(students);
            // Publish subscription event
            pubsub.publish('STUDENT_ADDED', { studentAdded: input });
            return input;
        },
        removeStudent: (_, { student_id }) => {
            const students = readStudents();
            const index = students.findIndex(s => s.student_id === student_id);
            if (index === -1)
                throw new Error(`Student with id ${student_id} not found`);
            const [removed] = students.splice(index, 1);
            writeStudents(students);
            pubsub.publish('STUDENT_REMOVED', { studentRemoved: removed });
            return removed;
        },
    },
    Subscription: {
        studentAdded: {
            subscribe: () => pubsub.asyncIterator('STUDENT_ADDED'),
            resolve: (payload) => payload.studentAdded,
        },
        studentRemoved: {
            subscribe: () => pubsub.asyncIterator('STUDENT_REMOVED'),
            resolve: (payload) => payload.studentRemoved,
        },
    },
};
