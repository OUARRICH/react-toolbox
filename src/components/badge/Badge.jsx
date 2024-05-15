import clsx from "clsx";
import "./badge.css";

const Badge = ({ children, variant }) => {
  const badgeClassName = clsx("Badge", {
    "Badge--guild": variant === "primary",
    "Badge--basic": variant === "basic",
    "Badge--secondary": variant === "secondary",
    "Badge--info": variant === "info",
    "Badge--active": variant === "active",
  });
  return <span className={badgeClassName}>{children}</span>;
};

export default Badge;
