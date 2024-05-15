import Input from "./Input";

const NumberInput = ({
    max,
    onlyPositive,
    onChange,
    ...rest
    }) => {
        const handleChange = (e) => {
            const inputValue = e.target.value;
        
            if(onlyPositive) {
                // Remove non-numeric characters and leading zeros
                const sanitizedValue = inputValue.replace(/[^0-9]/g, '').replace(/^0+/, '');
                // Check if the input is a positive number and does not exceed the max value
                if (sanitizedValue === '' || (parseInt(sanitizedValue, 10) <= max && sanitizedValue[0] !== '0')) {
                    onChange(sanitizedValue);
                }
            }else {
                onChange(inputValue);
            }
        };
        return (
            <Input
                {...rest}
                type="number"
                max={max}
                onChange={handleChange}
            />
        );
};

export default NumberInput;
