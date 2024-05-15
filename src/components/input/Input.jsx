import clsx from "clsx";
import { forwardRef } from "react";

import "./input.css";

const ForwardedInput = forwardRef(function Input(
  { placeholder, required, valid, error, classes, icons, ...rest },
  ref
) {
  const LeftIcon = icons && icons.left && icons.left.icon;
  return (
    <div className={clsx("inputContainer", classes && classes.container)}>
      <div
        className={clsx("inputContainer__inner", {
          "inputContainer__input--valid ": valid,
          "inputContainer__input--nonValid":
            ![undefined, null].includes(valid) && !valid,
        })}
      >
        {icons && icons.left && (
          <div role="button" onClick={icons.left.onClick}>
            <LeftIcon />
          </div>
        )}
        <input
          {...rest}
          placeholder={required ? `${placeholder}*` : placeholder}
          className={clsx(classes && classes.input, "inputContainer__input")}
          required={required}
          ref={ref}
        />
        {icons &&
          icons.right &&
          icons.right.map((el, index) => {
            const RightIcon = el.icon;
            return (
              <div
                key={`right_icon_${index}`}
                role="button"
                onClick={el.onClick}
              >
                <RightIcon />
              </div>
            );
          })}
      </div>
      {error && <span>{error}</span>}
    </div>
  );
});

export default ForwardedInput;
