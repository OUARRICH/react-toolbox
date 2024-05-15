import NumberInput from "./NumberInput";

export default {
    title: "Input/Number",
    component: NumberInput,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
};

export const Default = {
    args: {
        name: "hours",
        placeholder: "Entrer un nombre",
        id:"hours",
        max: 59,
        onChange: (value) => console.log(value),
        onlyPositive: true
    }
};
