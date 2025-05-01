import students from '../data/students.json' with { type: "json" };
export const getAllStudents = (req, res) => {
    res.send(students);
};
