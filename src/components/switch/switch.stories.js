import Switch from "./Switch";

export default {
  title: "Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    label: "switch component label",
    value: true,
    onChange: () => console.log("clicked switch component"),
  },
};
