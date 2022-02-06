import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: `expense_${Date.now()}`,
            ...enteredExpenseData,
        };
        onAddExpense(expenseData);
    };

    const toggleFormHandler = () => setShowForm((prevState) => !prevState);
    return (
        <div className="new-expense">
            {showForm && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onToggleForm={toggleFormHandler}
                />
            )}
            {!showForm && (
                <button onClick={toggleFormHandler}>Add new Expense</button>
            )}
        </div>
    );
};

export default NewExpense;
