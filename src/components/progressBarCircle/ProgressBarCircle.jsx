import clsx from "clsx";
import "./progressBarCircle.css";

const ProgressBarCircle = ({
  sqSize = 200,
  percentage = 0,
  strokeWidth = 10,
  texte = "",
  variant,
  className,
}) => {
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sqSize - strokeWidth) / 2;

  // Enclose circle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;

  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;

  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="progress-bar-circle-container">
      <svg
        className="circle-svg"
        width={sqSize}
        height={sqSize}
        viewBox={viewBox}
      >
        <circle
          className="circle-background"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className={clsx(
            "circle-progress",
            className,
            `ProgressBarCircle--${variant}`
          )}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
        <text
          className="circle-text"
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
        >
          {`${percentage}%`}
        </text>
      </svg>
      {texte && <span className="score">{texte}</span>}
    </div>
  );
};
export default ProgressBarCircle;
