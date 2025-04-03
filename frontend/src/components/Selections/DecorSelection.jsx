const DecorSelection = ({ selectedDecor, styles, handleChange, options }) => {
    return (
        <select
                className={styles.selector}
                name="decor"
                id="decor"
                value={selectedDecor}
                onChange={handleChange}
                
            >
                <option value="" disabled>
                    Decor
                </option>
                {options.decor.map((decor) => (
                    <option key={decor} value={decor}>
                        {decor.charAt(0).toUpperCase() + decor.slice(1)}
                    </option>
                ))}
        </select>
    );
};

export default DecorSelection;