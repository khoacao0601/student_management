import professors from "../data/professors.json" with { type: "json" };
export const getAllProfessors = (req, res) => {
    res.send(professors);
};
