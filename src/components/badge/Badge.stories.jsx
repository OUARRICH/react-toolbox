import Badge from "./Badge";

export default {
    title: "Badge",
    component: Badge,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export const Default = {
    args: {
        children : "Kubernetes",
        variant: "basic"
    }
};

export const Primary = {
    args: {
        children : "3 autres niveaux...",
        variant: "primary"
    }
};

export const Secondary = {
    args: {
        children : "1m2s",
        variant: "secondary"
    }
};
