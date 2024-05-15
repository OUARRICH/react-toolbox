import Popup from "./Popup";

export default {
    title: "Popup",
    component: Popup,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
};

export const Default = {
    args: {
        open: true,
        content: "Êtes-vous sûr de vouloir supprimer cette ligne?",
        cancelLabel: "Annuler",
        confirmLabel: "Supprimer"
    }
};
