import { AsyncPaginate } from "react-select-async-paginate";

import "./asyncSelect.css";

/**
 * This component is build around the library react-select-async-paginate and react-select.
 * It accepts all props available for react-select and also react-select-async-paginate one's.
 * More informations in the documentation:  https://react-select.com/ and
 *  https://github.com/vtaits/react-select-async-paginate/tree/master/packages/react-select-async-paginate
 */

const customStyles = (valid) => ({
  dropdownIndicator: (styles) => {
    return {
      ...styles,
      color: "var(--border-color)",
    };
  },
  control: (styles) => {
    return {
      ...styles,
      borderColor: (function () {
        if (valid) {
          return "var(--green-emerald)";
        } else if (valid === false) {
          return "var(--ruby-red)";
        } else {
          return "rgba(7, 112, 237, 0.60)";
        }
      })(),
      borderWidth: 2,
      borderRadius: "var(--border-radius)",
      ":hover": {
        borderColor: "rgba(7, 112, 237, 0.60)",
      },
    };
  },
  multiValueRemove: (styles) => ({
    ...styles,
    ":hover": {
      color: "#C51B32",
    },
  }),
});

function AsyncSelect({
  additional,
  loadPageOptions,
  value,
  onChange,
  error,
  valid,
  ...rest
}) {
  return (
    <div className="select">
      <AsyncPaginate
        additional={additional}
        value={value}
        loadOptions={loadPageOptions}
        onChange={onChange}
        styles={customStyles(valid)}
        {...rest}
      />
      {error && <span className="select__error">{error}</span>}
    </div>
  );
}

export default AsyncSelect;
