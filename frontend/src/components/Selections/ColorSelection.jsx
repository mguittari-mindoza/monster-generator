const ColorSelection = ({ selectedColor, styles, handleChange, options }) => {
    return (
        <select
                className={styles.selector}
                name="color"
                id="color"
                value={selectedColor}
                onChange={handleChange}
                
            >
                <option value="" disabled>
                    Color
                </option>
                {options.color.map((color) => (
                    <option key={color} value={color}>
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                    </option>
                ))}
        </select>
    );
};

export default ColorSelection;