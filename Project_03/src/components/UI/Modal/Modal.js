import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import "./Modal.css";

const Modal = (props) => {
    const ref = useRef(null);

    const { onClickOutside } = props;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [onClickOutside]);

    const closeDialog = (e) => {
        e.preventDefault();
        props.onAcknowledge();
    };

    const Backdrop = () => <div className="modal__container" />;
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop />,
                document.querySelector("#backdrop-root")
            )}
            {ReactDOM.createPortal(
                <div ref={ref} className="modal">
                    <header className="modal__header">
                        <div>{props.title}</div>
                    </header>
                    <div className="modal__message">{props.message}</div>
                    <Button
                        className="modal__button"
                        text="Okay"
                        onClick={closeDialog}
                    />
                </div>,
                document.querySelector("#overlay-root")
            )}
        </>
    );
};

export default Modal;
