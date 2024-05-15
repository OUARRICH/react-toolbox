import Error from "./Error";

export default {
    title: "Error",
    component: Error,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export const Default = {
    args: {
        message: "La saisie comporte des options en double"
    }
};
