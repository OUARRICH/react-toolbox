import "./radioButton.css";

const RadioButton = ({ id, labelName, onChange, ...rest }) => {
  return (
    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
      <input
        id={id}
        type="radio"
        name="flexRadioDefault"
        onChange={(e) => onChange(e)}
        className="radioButton-input"
        {...rest}
      />
      <label
        htmlFor={id}
        className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
      >
        {labelName}
      </label>
    </div>
  );
};
export default RadioButton;
