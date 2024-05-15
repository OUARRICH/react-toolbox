import MinMaxInputNumber from "./MinMaxInputNumber";

export default {
  title: "Input/MinMaxInputNumber",
  component: MinMaxInputNumber,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    valuesArray: [0, 1, 2, 3, 4],
    updateValuesArrayFunc: (val) => console.log("update ", val),
    toWord: "à",
    max1: 4,
    min1: 1,
    max2: 4,
    min2: 1,
    defaultValue1: 0,
    defaultValue2: 4,
    mdSize: 16,

    onChange: (e) => console.log(e.target.value),
  },
};
