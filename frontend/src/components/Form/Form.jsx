import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './form.module.css';
import ColorSelection from '../Selections/ColorSelection';
import SizeSelection from '../Selections/SizeSelection';
import WeaponSelection from '../Selections/WeaponSelection';

const Form = () => {
    const [formData, setFormData] = useState({
        color: '',
        size: '',
        weapon: ''
    });

const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target; // Récupère le nom et la valeur de l'input
        setFormData({
            ...formData, // Copie les propriétés existantes de formData
            [name]: value // Met à jour uniquement la propriété correspondant au champ modifié
        });
        console.log(`Selected data: ${value}`);
        console.log("formData", formData);
    };

    console.log("formData", formData);

    const handleSubmit = async (event) => {
        event.preventDefault();
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
            navigate("/monster", { state: data });
            console.log('Response from server:', data);
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <ColorSelection selectedColor={formData.color} styles={styles} handleChange={handleChange} />
            <SizeSelection selectedSize={formData.size}  styles={styles} handleChange={handleChange} />
            <WeaponSelection selectedWeapon={formData.weapon}  styles={styles} handleChange={handleChange} />
            <button className={styles.bouton}>Valider</button>
        </form>
    );
};

export default Form;