const WeaponSelection = ({ selectedWeapon, styles, handleChange }) => {
    return (
        <select
                className={styles.selector}
                name="weapon"
                id="weapon"
                value={selectedWeapon}
                onChange={handleChange}
            >
                <option value="" disabled>
                    Arme
                </option>
                <option value="sword">Epée</option>
                <option value="axe">Hache</option>
                <option value="bow">Arc</option>
                <option value="shotgun">Fusil</option>
                <option value="spear">Lance</option>
        </select>
    );
};

export default WeaponSelection;