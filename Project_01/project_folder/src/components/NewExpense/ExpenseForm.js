import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    /*  ALTERNATE useState pattern
    *   Using object pattern instead of storing individual properties as
    *   individual state values
    * 
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '' 
    });*/

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        /* ALTERNATE
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: e.target.value };            
        });
        */
    };
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        /* ALTERNATE
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: e.target.value };            
        });
        */
    };
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        /* ALTERNATE
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: e.target.value };            
        });
        */
    };

    const resetInputs = () => {
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        resetInputs();
        props.onToggleForm();
    };

    const disableForm = () => {
        return (
            enteredTitle.length < 3 ||
            enteredAmount.length < 2 ||
            enteredDate.length < 1
        );
    };

    const handleCancel = () => {
        resetInputs();
        props.onToggleForm();
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        id="amount"
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input
                        id="date"
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={handleCancel}>Cancel</button>
                <button type="submit" disabled={disableForm()}>
                    Add Expense
                </button>
            </div>
        </form>
    );
};

export default ExpenseForm;
