import ProgressBarCircle from "./ProgressBarCircle";
import "../../index.css";

export default {
  title: "ProgressBarCircle",
  component: ProgressBarCircle,
  tags: ["autodocs"],
};

export const Success = {
  args: {
    strokeWidth: 15,
    sqSize: 200,
    percentage: 75,
    texte: "Score globale",
    variant: "success",
  },
};

export const Warning = {
  args: {
    strokeWidth: 15,
    sqSize: 200,
    percentage: 95,
    texte: "Score globale",
    variant: "warning",
  },
};
