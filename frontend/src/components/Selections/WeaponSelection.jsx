const WeaponSelection = ({ selectedWeapon, styles, handleChange, options }) => {
    return (
        <select
                className={styles.selector}
                name="weapon"
                id="weapon"
                value={selectedWeapon}
                onChange={handleChange}
                
            >
                <option value="" disabled>
                    Weapon
                </option>
                {options.weapon.map((weapon) => (
                    <option key={weapon} value={weapon}>
                        {weapon.charAt(0).toUpperCase() + weapon.slice(1)}
                    </option>
                ))}
        </select>
    );
};

export default WeaponSelection;