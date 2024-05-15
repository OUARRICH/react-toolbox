import Toast from "./Toast";

export default {
    title: "Toast",
    component: Toast,
    tags: ["autodocs"],
};

export const Basic = {
    args: {
        title: "Titre",
        message: "Message du Toast",
        show: true
    }
};

export const Success = {
    args: {
        status: "success",
        title: "Succès",
        message: "Question créé avec succès",
        show: true
    }
};

export const Error = {
    args: {
        status: "error",
        title: "Oops!",
        message: "La création de la question a échoué",
        show: true
    }
};

export const WithDelay = {
    args: {
        status: "error",
        title: "Oops!",
        message: "La création de la question a échoué",
        show: true,
        delay: 5
    }
}
