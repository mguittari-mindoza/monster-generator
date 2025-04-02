const ColorSelection = ({ selectedColor, styles, handleChange }) => {
    return (
        <select
                className={styles.selector}
                name="color"
                id="color"
                value={selectedColor}
                onChange={handleChange}
            >
                <option value="" disabled>
                    Couleur
                </option>
                <option value="red">Rouge</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="black">Noir</option>
                <option value="silver">Argenté</option>
                <option value="multicolored">Multicolore</option>
        </select>
    );
};

export default ColorSelection;