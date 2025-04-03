import { Link } from 'react-router-dom';
import styles from './errorPage.module.css';

const ErrorPage = () => {

    return (
        <div className={styles["main-container"]}>
            <p className={styles.message}>Error 404, please try again</p>
            <Link className={styles.link} to="/">
                <button className={styles.bouton}>Return to homepage</button>
            </Link>
        </div>
    );
};

export default ErrorPage;