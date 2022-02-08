import Card from "../Card/Card";
import styles from "./Form.module.css";

const Form = (props) => {
    return (
        <Card>
            <form className={styles.form}>{props.children}</form>
        </Card>
    );
};

export default Form;
