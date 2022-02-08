import { useState } from "react";
import NewUserForm from "./components/NewUser/NewUserForm";
import UsersList from "./components/Users/UsersList";

const INIT_USERS = [
    {
        id: `user_1644186361409`,
        username: "Jeremy",
        age: 44,
    },
];

const App = () => {
    const [users, setUsers] = useState(INIT_USERS);

    const addUserHandler = (user) =>
        setUsers((prevUsers) => [...prevUsers, user]);

    return (
        <div className="main-content">
            <NewUserForm onClick={addUserHandler} />
            <UsersList users={users} />
        </div>
    );
};

export default App;
