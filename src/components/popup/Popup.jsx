import { XMarkIcon } from "@heroicons/react/24/outline";
import Button from "../button";

import "./popup.css";

const Popup = ({ 
    content,
    cancelLabel,
    confirmLabel,
    onCancel,
    onConfirm,
    open,
    onClose
    }) => {
    return open && (
        <div className="popup">
            <div className="popup__inner">
                <div className="popup__inner_header">
                    <span onClick={onClose}><XMarkIcon /></span>
                </div>
                <div className="popup__inner_content">
                    {content}
                </div>
                <div className="popup__inner__footer">
                    <Button 
                        label={cancelLabel}
                        variant="accent"
                        className="popup__inner__footer__action"
                        onClick={onCancel}
                    />
                    <Button 
                        label={confirmLabel}
                        variant="danger" 
                        className="popup__inner__footer__action"
                        onClick={onConfirm}
                    />
                </div>
            </div>
        </div>
        )
};

export default Popup;
