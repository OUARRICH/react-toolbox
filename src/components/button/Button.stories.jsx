import Button from "./Button";

export default {
    title: "Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export const Basic = {
    args: {
        label: "Basic",
        variant: "basic",
    }
};

export const Primary = {
    args: {
        label: "Inscription",
        variant: "primary",
        onClick: () =>{console.log("Button Clicked!")}
    }
};

export const Secondary = {
    args: {
        label: "Consulter l'avancement des tests",
        variant: "secondary"
    }
};

export const Success = {
    args: {
        label: "Success",
        variant: "success"
    }
};

export const Accent = {
    args: {
        label: "Génerer Le Test",
        variant: "accent"
    }
};

export const Danger = {
    args: {
        label: "Supprimer",
        variant: "danger"
    }
};

export const Disabled = {
    args: {
        label: "Disabled",
        disabled: true
    }
};
