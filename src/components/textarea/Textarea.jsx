import clsx from "clsx";

import "./textarea.css";

const Textarea = ({className, ...rest}) => {
    return <div className={clsx(className, "Textarea")}>
            <textarea {...rest}></textarea>
        </div>
};

export default Textarea;
