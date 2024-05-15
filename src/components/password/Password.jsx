import { useState } from "react";
import clsx from "clsx";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";


import "./password.css";

const Password = ({
    placeholder,
    required,
    valid,
    error,
    ...rest
    }) => {
        const [isPasswordVisible, setIsPasswordVisible] = useState(false);
        const [inputType, setInputType] = useState("password");
        
        const passwordVisiblityHandler = () => {
            setIsPasswordVisible(() => !isPasswordVisible);
            if(inputType === "text") {
                setInputType("password");
            } else {
                setInputType("text");
            }
        };
        
        return (
            <div className="password">
                <div className={clsx("password__input-icon", {"password__input--valid ": valid, "password__input--nonValid": valid !==undefined && !valid})}>
                    <input 
                        type={inputType}
                        placeholder={required ? `${placeholder}*` : placeholder}
                        className="password__input"
                        required={required}
                        {...rest}
                    />
                    <div role="button" onClick={passwordVisiblityHandler}>
                        {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon /> }
                    </div>
                </div>
                {
                    error && 
                    <span>{error}</span>
                }
            </div>);
};

export default Password;
