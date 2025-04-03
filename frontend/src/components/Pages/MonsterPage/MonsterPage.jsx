import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './monsterPage.module.css';

const MonsterPage = () => {
    const location = useLocation();
    const data = location.state;

    return (
        <div className={styles["main-container"]}>
            <img className={styles.image} src={data[0].url} alt="Generated Monster" />
            <Link className={styles.link} to="/">
                <button className={styles.bouton}>New monster</button>
            </Link>
        </div>
    );
};

export default MonsterPage;