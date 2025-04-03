const SizeSelection = ({ selectedSize, styles, handleChange, options }) => {
    return (
        <select
                className={styles.selector}
                name="size"
                id="size"
                value={selectedSize}
                onChange={handleChange}
                
            >
                <option value="" disabled>
                Size
            </option>
            {options.size.map((size) => (
                <option key={size} value={size}>
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                </option>
            ))}
        </select>
    );
};

export default SizeSelection;