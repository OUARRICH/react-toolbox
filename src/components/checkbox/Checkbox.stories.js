import Checkbox from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    id: "1",
    value: "answer-1",
    labelName: "Label of checkbox",
    isChecked: false,
    handleRadioSelect: (e) => e,
  },
};
