import React, { useState } from 'react';

const DebitCardInputComponent = () => {
    const [cardNumber, setCardNumber] = useState('');

    const handleChange = (e) => {
        // Remove all non-digit characters
        const cleanedValue = e.target.value.replace(/\D/g, '');

        // Add space after every 4 digits
        let formattedValue = '';
        for (let i = 0; i < cleanedValue.length; i++) {
            if (i > 0 && i % 1 === 0) {
                formattedValue += ' ';
            }
            formattedValue += cleanedValue[i];
        }

        // Update state with formatted value
        setCardNumber(formattedValue);
    };

    return (
        <div className="form-group mb-4">
            <input
                name="dc"
                type="text"
                inputMode="numeric"
                className="form-control"
                minLength={10}
                maxLength={10} // Adjusted for spaces added
                placeholder='X X X X X X Last 6 Digit Card No'
                required
                value={cardNumber}
                onChange={handleChange}            />
        </div>
    );
};

export default DebitCardInputComponent;
