import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = ({ date, title, amount }) => {
    const [itemTitle, setItemTitle] = useState(title);
    const clickHandler = (e) => setItemTitle("Title changed");

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{itemTitle}</h2>
                    <div className="expense-item__price">{`$${amount}`}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );
};

export default ExpenseItem;
