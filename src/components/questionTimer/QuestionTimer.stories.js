import QuestionTimer from "./QuestionTimer";

export default {
    title: "Question Timer",
    component: QuestionTimer,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
};

export const Default = {
    args: {
        initialTime: 65
    }
};
