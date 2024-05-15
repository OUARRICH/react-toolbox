import RadioButton from "./RadioButton";

export default {
  title: "RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    id: "1",
    value: "answer-1",
    labelName: "Label of radio button",
    handleRadioSelect: (e) => e,
  },
};
