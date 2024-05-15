import ProgressBar from "./ProgressBar";

export default {
  title: "ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
};

export const Success = {
  args: {
    name: "progressBar",
    width: "25",
    variant: "success",
  },
};

export const Warning = {
  args: {
    width: "50",
    variant: "warning",
  },
};
