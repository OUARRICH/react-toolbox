import TextInput from "./TextInput";
import { MagnifyingGlassIcon, AdjustmentsVerticalIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default {
    title: "Input/Text",
    component: TextInput,
    // parameters: {
    //     layout: "centered"
    // },
    tags: ["autodocs"],
};

export const Default = {
    args: {
        name: "firstName",
        placeholder: "Prénom",
        id:"firstName",
        onChange: (e) => {console.log(e.target.value);}
    }
};

export const Required = {
    args: {
        name: "firstName",
        placeholder: "Prénom",
        id:"firstName",
        required: true,
    }
};

export const Valid = {
    args: {
        name: "firstName",
        placeholder: "Prénom",
        valid: true
    }
};

export const WithError = {
    args: {
        name: "firstName",
        placeholder: "Prénom",
        valid: false,
        error: "le prénom n'est pas valide",
    }
}

export const WithLeftIcon = {
    args: {
        name: "firstName",
        placeholder: "Prénom",
        icons: {
            left: {
                icon: MagnifyingGlassIcon,
                onClick: () => console.log('Left Icon clicked')
            }
        }
    }
}

export const WithRightIcon = {
    args: {
        name: "firstName",
        placeholder: "Prénom",
        icons: {
            right: [{
                icon: AdjustmentsVerticalIcon,
                onClick: () => console.log('Right Icon clicked')
            }]
        }
    }
}

export const WithManyRightIcon = {
    args: {
        name: "firstName",
        placeholder: "Prénom",
        icons: {
            right: [{
                icon: XMarkIcon,
                onClick: () => console.log('Right 2 Icon clicked')
            },{
                icon: AdjustmentsVerticalIcon,
                onClick: () => console.log('Right 1 Icon clicked')
            }]
        }
    }
}