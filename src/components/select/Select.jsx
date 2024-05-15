import { TESelect } from "tw-elements-react";

import "./select.css";

function Select({
  placeholder,
  data,
  value,
  onChange,
  error,
  isMulti,
  isSearchable,
  ...rest
}) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full">
        <TESelect
          search={isSearchable}
          multiple={isMulti}
          placeholder={placeholder}
          data={data}
          value={value}
          onValueChange={onChange}
          {...rest}
        />
      </div>

      <div className="mb-6 self-start">
        {error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    </div>
  );
}

export default Select;
