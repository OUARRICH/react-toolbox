import React from "react";
import clsx from "clsx";

import "./button.css";

class Button extends React.Component {
  /**
   * @parameters
   * variant: accepts the following values: basic, primary, secondary, danger, accent
   */

  render() {
    const { label, variant = "basic", className, icon, ...rest } = this.props;
    return (
      <button
        className={clsx("Button", className, `Button--${variant}`)}
        {...rest}
      >
        {label}
        {icon && <span className="Button__icon">{icon}</span>}
      </button>
    );
  }
}

export default Button;
