import { InputNumber } from "rsuite";

const RsInputNumber = ({
  className,
  defaultValue,
  max,
  min,
  onChange,
  value,
  ...rest
}) => {
  return (
    <div className="w-fit">
      <InputNumber
        defaultValue={defaultValue}
        max={max}
        min={min}
        onChange={onChange}
        value={value}
        className={className}
        {...rest}
      />
    </div>
  );
};

export default RsInputNumber;
