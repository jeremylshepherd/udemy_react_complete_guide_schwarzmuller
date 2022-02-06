import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

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
            <ExpensesChart expenses={renderedItems} />
            <ExpensesList items={renderedItems} />
        </Card>
    );
};

export default Expenses;
