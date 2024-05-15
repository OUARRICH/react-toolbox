import RsInputNumber from "./RsInputNumber";

export default {
  title: "Input/RsInputNumber",
  component: RsInputNumber,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    max:40,
    min:1,
    defaultValue:20,
    onChange: (e) => console.log(e.target.value),
  },
};
