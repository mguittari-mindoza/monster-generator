import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './form.module.css';
import ColorSelection from '../Selections/ColorSelection';
import SizeSelection from '../Selections/SizeSelection';
import WeaponSelection from '../Selections/WeaponSelection';
import options from '../../options.json';
import DecorSelection from '../Selections/DecorSelection';

const Form = () => {
    const [formData, setFormData] = useState({
        color: '',
        size: '',
        weapon: '',
        decor: '',
    });

const [errorMessage, setErrorMessage] = useState('');

const navigate = useNavigate();

const [isLoading, setIsLoading] = useState(false);

const handleChange = (event) => {
    const { name, value } = event.target;

    // Crée une copie locale de formData avec la nouvelle valeur
    const updatedFormData = {
        ...formData,
        [name]: value,
    };

    setFormData(updatedFormData);

    // Vérifie si tous les champs sont remplis
    if (updatedFormData.color && updatedFormData.size && updatedFormData.weapon && updatedFormData.decor) {
        setErrorMessage(''); // Efface le message d'erreur
    }
};

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!formData.color || !formData.size || !formData.weapon || !formData.decor) {
            setErrorMessage('Tous les champs doivent être remplis.');
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/generate-image`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data)
            
            // Précharge l'image
        const image = new Image();
        image.src = data[0].url;

        image.onload = () => {
            navigate("/monster", { state: data });
        };

        // (Facultatif) Si l'image ne se charge pas, navigue quand même après un timeout
        image.onerror = () => {
            console.warn("Erreur de chargement d’image, navigation forcée.");
            navigate("/notfound");
        };
        
        } catch (error) {
            console.error('Error during fetch:', error);
            navigate("/notfound");
        } 
    }

    return (
        <>
            {isLoading ? (
                <div className={styles.loaderContainer}>
                    <div className={styles.loader}></div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className={`${styles.form} ${isLoading ? styles.slideOut : ''}`}>
                    <ColorSelection selectedColor={formData.color} styles={styles} handleChange={handleChange} options={options} />
                    <SizeSelection selectedSize={formData.size} styles={styles} handleChange={handleChange} options={options} />
                    <WeaponSelection selectedWeapon={formData.weapon} styles={styles} handleChange={handleChange} options={options} />
                    <DecorSelection selectedDecor={formData.decor} styles={styles} handleChange={handleChange} options={options} />
                    <button className={styles.bouton}>Go</button>
                    {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                </form>
            )}
        </>
    );
};

export default Form;