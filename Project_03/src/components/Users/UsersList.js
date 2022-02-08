import Card from "../UI/Card/Card";
import User from "./User";
import styles from "./Userslist.module.css";

const UsersList = (props) => {
    return (
        <Card>
            <div className={styles["users-list"]}>
                {props.users.map((user) => (
                    <User key={user.id} {...user} />
                ))}
            </div>
        </Card>
    );
};

export default UsersList;
