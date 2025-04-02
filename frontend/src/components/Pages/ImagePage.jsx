import styles from './imagePage.module.css';
import { Link, useLocation } from 'react-router-dom';

const ImagePage = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data[0].url);
    
    return (
        <div className={styles["main-container"]}>
            <img className={styles.image} src={data[0].url} alt="" />
            <Link className={styles.link} to="/">
                <button className={styles.bouton}>Crée un nouveau monstre</button>
            </Link>
        </div>
    );
};

export default ImagePage;