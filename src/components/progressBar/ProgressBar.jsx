import clsx from "clsx";
import "./progressBar.css";

const ProgressBar = ({ width, variant, className }) => {
  return (
    <div className="progressBar">
      <div
        className={clsx(className, `ProgressBar--${variant}`)}
        style={{
          width: `${width}%`,
        }}
      >
        {width}%
      </div>
    </div>
  );
};

export default ProgressBar;
