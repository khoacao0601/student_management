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
        students: () => {
            const list = readStudents();
            return list;
        },
    },
    Mutation: {
        addStudent: (_, args) => {
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
            resolve: (payload) => {
                return payload.studentAdded;
            },
        },
    },
};
