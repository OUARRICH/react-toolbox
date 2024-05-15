import { Toast, ToastBody, ToastHeader } from "reactstrap";

import "./toast.css";
import clsx from "clsx";
import { useEffect } from "react";

const CustomToast = ({ status, title, message, delay = 0, show, setShow }) => {
  const mapStatusClasses = {
    success: "CustomToast__header--success",
    error: "CustomToast__header--error",
  };

  useEffect(() => {
    let timeout;
    if (delay !== 0 && show) {
      timeout = setTimeout(() => setShow((prev) => !prev), delay * 1000);
    }

    return () => clearTimeout(timeout);
  }, [delay, show, setShow]);

  return (
    show && (
      <div className="CustomToast">
        <Toast>
          <ToastHeader
            className={clsx("CustomToast__header", mapStatusClasses[status])}
          >
            {title}
          </ToastHeader>
          <ToastBody className="CustomToast__body">{message}</ToastBody>
        </Toast>
      </div>
    )
  );
};

export default CustomToast;
