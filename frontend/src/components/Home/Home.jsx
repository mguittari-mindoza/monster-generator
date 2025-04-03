import React from 'react';
import styles from './Home.module.css';
import logoMonster from '../../assets/Logo-Monster.jpeg';
import Form from '../Form/Form.jsx';

const Home = () => {
    return (
        <div className={styles["main-container"]}>
            <img className={styles.logo} src={logoMonster} alt="Main de monstre qui sort de l'écran" />
            <p className={styles.title}>Create a heroic fantasy monster&nbsp;!</p>
            <Form />
        </div>
    );
};

export default Home;