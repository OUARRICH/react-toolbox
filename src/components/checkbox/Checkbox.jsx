import "./checkbox.css";

const Checkbox = ({ id, labelName, value, onChange, ...rest }) => {
  return (
    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
      <input
        id={id}
        type="checkbox"
        value={value}
        onChange={(e) => onChange(e)}
        className="checkbox-input"
        {...rest}
      />
      <label
        htmlFor={id}
        className="inline-block pl-[0.15rem] hover:cursor-pointer"
      >
        {labelName}
      </label>
    </div>
  );
};
export default Checkbox;
