const SizeSelection = ({ selectedSize, styles, handleChange }) => {
    return (
        <select
                className={styles.selector}
                name="size"
                id="size"
                value={selectedSize}
                onChange={handleChange}
            >
                <option value="" disabled>
                Taille
            </option>
            <option value="small">Petit</option>
            <option value="medium">Moyen</option>
            <option value="gigantic">Gigantesque</option>
        </select>
    );
};

export default SizeSelection;