import { RadioTileGroup, RadioTile } from "rsuite";

const RichRadioGroup = ({
  radiosList,
  isInline = true,
  defaultValue,
  onChange,
  ...rest
}) => {
  return (
    <RadioTileGroup
      defaultValue={defaultValue}
      inline={isInline}
      onChange={onChange}
      {...rest}
    >
      {radiosList.map((element, index) => (
        <RadioTile key={index} label={element.label} value={element.value}>
          {element.text}
        </RadioTile>
      ))}
    </RadioTileGroup>
  );
};

export default RichRadioGroup;
