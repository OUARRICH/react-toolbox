import Loading from "./Loading";

export default {
    title: "Loading",
    component: Loading,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export const Small = {
    args: {
        size: "small"
    }
};

export const Medium = {
    args: {
        size: "medium"
    }
};

export const Large = {
    args: {
        size: "large"
    }
};
