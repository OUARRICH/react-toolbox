import RichRadioGroup from "./RichRadioGroup";

export default {
  title: "RichRadioGroup",
  component: RichRadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    radiosList: [
      {
        label: "Resultats Non Communiqués",
        value: "VAL1",
        text: "Ne pas afficher les résultats au candidat",
      },
      {
        label: "Resultats Détaillés",
        value: "VAL2",
        text: "Afficher les résultats détaillés au candidat",
      },
      {
        label: "Resultats Partiels",
        value: "VAL3",
        text: "Afficher le pourcentage des réponses valides",
      },
    ],
    isInline: true,
    defaultValue: "VAL2",
    value: "VAL2",
    onChange: (val) => console.log(val),
  },
};
