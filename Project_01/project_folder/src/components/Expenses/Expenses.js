import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = ({ items }) => {
    const [filterYear, setFilterYear] = useState("");

    const onYearFilter = (selectedYear) => {
        setFilterYear(selectedYear);
    };

    let renderedItems =
        filterYear === ""
            ? items
            : items.filter((item) => {
                  return item.date.getFullYear().toString() === filterYear;
              });
    return (
        <Card className="expenses">
            <ExpensesFilter setYearFilter={onYearFilter} year={filterYear} />
            {renderedItems.map((item) => (
                <ExpenseItem key={item.id} {...item} />
            ))}
        </Card>
    );
};

export default Expenses;
