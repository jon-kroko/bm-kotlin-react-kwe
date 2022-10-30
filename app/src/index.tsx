import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {validateEquation} from 'equation-validator';
import {equationsExamples} from './equationsExamples';
import DynamicValidator from './DynamicValidator';

ReactDOM.render(
    <React.StrictMode>
        <h1>Equation validator</h1>
        <DynamicValidator/>
        {equationsExamples.map((equation: string, index: number) =>
            <p key={`equation-${index}`}>
                Is <span className='equation'>{equation}</span> valid? –&nbsp;
                <span className='validation-result'>{validateEquation(equation)}</span>
            </p>
        )}
    </React.StrictMode>,
    document.getElementById('root')
);

