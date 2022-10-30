import React, {useState} from 'react';
import {validateEquation} from 'equation-validator';

const DynamicValidator: React.FC = () => {
    const [equation, setEquation] = useState<string>('');

    const inputElement = <input className='equation' type="text" value={equation} onChange={(event) => {
        setEquation(event.target.value)
    }}/>;

    return (
        <p>Is {inputElement} valid? – <span className='validation-result'>{validateEquation(equation)}</span></p>
    );
};

export default DynamicValidator;