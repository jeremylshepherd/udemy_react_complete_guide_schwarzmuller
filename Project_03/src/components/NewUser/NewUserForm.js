import { useState } from "react";
import Form from "../UI/Form/Form";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

const NewUserForm = (props) => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [showError, setShowError] = useState(false);
    const [errorTitle, setErrorTitle] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const resetForm = () => {
        setAge("");
        setUsername("");
    };

    const handleNameInput = (e) => {
        setUsername(e.target.value);
    };

    const handleAgeInput = (e) => {
        setAge(e.target.value);
    };

    const onError = ({ title, message }) => {
        setErrorTitle(title);
        setErrorMessage(message);
        setShowError(true);
    };

    const acknowledgeError = () => {
        setShowError(false);
        setErrorTitle("");
        setErrorMessage("");
    };

    const renderModal = () => {
        return (
            <Modal
                title={errorTitle}
                message={errorMessage}
                onAcknowledge={acknowledgeError}
                onClickOutside={acknowledgeError}
            />
        );
    };

    const addUser = (e) => {
        e.preventDefault();
        if (!username.trim().length && !age.trim().length) {
            onError({
                title: "Invalid Input",
                message: "Username and age inputs are required",
            });
            return;
        }
        if (username.length < 3) {
            onError({
                title: "Invalid Input",
                message: "Username requires a minimum of 3 characters",
            });
            return;
        }

        const numAge = +age;

        if (Number.isNaN(numAge) || numAge > 125 || numAge < 1) {
            onError({
                title: "Invalid Input",
                message: "Age must be a number and must be between 1 - 125",
            });
            return;
        }
        const user = {
            id: `user_${Date.now()}`,
            username,
            age: numAge,
        };
        props.onClick(user);
        resetForm();
    };

    return (
        <>
            <Form>
                <label>Username</label>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={handleNameInput}
                />
                <label>Age (Years)</label>
                <input
                    type="text"
                    placeholder="age"
                    value={age}
                    onChange={handleAgeInput}
                />
                <Button text="Add User" onClick={addUser} />
            </Form>
            {showError && renderModal()}
        </>
    );
};

export default NewUserForm;
