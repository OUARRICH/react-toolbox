import FileUpload from "./FileUpload";

export default {
    title: "Upload",
    component: FileUpload,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
};
export const Default = {
    args: {
        label: "Charger une image",
        onChange: handleFileChange,
        id:"file-input"
    }
};

