import Select from "./Select";

export default {
  title: "Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    data: [
      {
        text: "Val 1",
        value: "Val 1",
      },
      {
        text: "Val 2",
        value: "Val 2",
      },
      {
        text: "Val 3",
        value: "Val 3",
      },
    ],
    onChange: () => console.log("value clicked"),
    isMulti: false,
    isSearchable: false,
    placeholder: "Placeholder :)",
    //value={selectedRoles.value}
  },
};
