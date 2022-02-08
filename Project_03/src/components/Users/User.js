import styles from "./User.module.css";

const User = (props) => {
    const { username, age } = props;
    return (
        <div className={styles.user}>
            <div>{`${username} (${age} years old)`}</div>
        </div>
    );
};

export default User;
