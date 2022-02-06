import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ items }) => {
    if (items.length < 1) {
        return <h2 className="expenses-list__fallback">No expenses found!</h2>;
    }

    return (
        <ul className="expenses-list">
            {items.map((item) => (
                <ExpenseItem key={item.id} {...item} />
            ))}
        </ul>
    );
};

export default ExpensesList;
