/*
 *   Styled Component Example
 */

import { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button.styled";

const FormControl = styled.div`
    margin: 0.5rem 0;

    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        color: ${(props) => (props.valid ? "black" : "red")};
    }

    & input {
        display: block;
        width: 100%;
        border: 1px solid ${(props) => (props.valid ? "#ccc" : "red")};
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
        background-color: ${(props) =>
            props.valid ? "transparent" : "rgba(255, 0, 0, 0.15)"};
    }

    & input:focus {
        outline: none;
        background: #fad0ec;
        border-color: #8b005d;
    }
`;

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = (event) => {
        if (event.target.value.length > 0) {
            console.log("goalInputChangeHandler if statement hit.");
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length < 1) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <FormControl valid={isValid}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </FormControl>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
