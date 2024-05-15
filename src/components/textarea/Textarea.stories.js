import Textarea from "./Textarea";

export default {
    title: "Input/TextArea",
    component: Textarea,
    tags: ["autodocs"],
};

export const Default = {
    args: {
        name: "textarea",
        placeholder: "Entrer un message",
        onChange: (e) => console.log(e.target.value)
    }
};
