import Password from "./Password";

export default {
    title: "Password Input",
    component: Password,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
};

export const Default = {
    args: {
        name: "passwrod",
        placeholder: "Mot de passe",
    }
};

export const Valid = {
    args: {
        name: "passwrod",
        placeholder: "Mot de passe",
        valid: true
    }
};

export const WithError = {
    args: {
        name: "passwrod",
        placeholder: "Mot de passe",
        valid: false,
        error: "le password n'est pas valide",
    }
}