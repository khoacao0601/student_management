import subjects from "../data/subjects.json" with { type: "json" };
export const getAllSubjects = (req, res) => {
    res.send(subjects);
};
