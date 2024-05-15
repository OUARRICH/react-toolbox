import { InputNumber, InputGroup } from "rsuite";

import "./minMaxInputNumber.css";

const MinMaxInputNumber = ({
  className,
  valuesArray,
  updateValuesArrayFunc,
  toWord = "à",
  max1 = 4,
  min1 = 1,
  max2 = 4,
  min2 = 1,
  defaultValue1 = 1,
  defaultValue2 = 4,
  ...rest
}) => {
  return (
    <InputGroup>
      <InputNumber
        className={className}
        defaultValue={defaultValue1}
        min={min1}
        max={max1}
        value={valuesArray[0]}
        onChange={(nextValue) => {
          const end = valuesArray[1];
          if (nextValue > end) {
            return;
          }
          updateValuesArrayFunc([nextValue, end]);
        }}
        {...rest}
      />
      <InputGroup.Addon>{toWord}</InputGroup.Addon>
      <InputNumber
        className={className}
        defaultValue={defaultValue2}
        min={min2}
        max={max2}
        value={valuesArray[1]}
        onChange={(nextValue) => {
          const start = valuesArray[0];
          if (start > nextValue) {
            return;
          }
          updateValuesArrayFunc([start, nextValue]);
        }}
        {...rest}
      />
    </InputGroup>
  );
};

export default MinMaxInputNumber;
