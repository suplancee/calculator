import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [display, setDisplay] = useState('');

    const appendToDisplay = (value) => {
        if (display === "Lance P. Chincuanco") {
            setDisplay(value);
        } else {
            setDisplay(prev => prev + value);
        }
    };

    const calculateResult = () => {
        try {
            setDisplay(eval(display).toString());
        } catch {
            setDisplay("Error");
        }
    };

    const clearDisplay = () => {
        setDisplay('');
    };

    const showName = () => {
        setDisplay("Lance P. Chincuanco");
    };

    return (
        <div className="calculator">
            <h1>Calculator of Lance P. Chincuanco - IT3A</h1>
            <input type="text" value={display} readOnly />
            <div className="buttons">
                {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '=', 'C'].map((button) => (
                    <button key={button} onClick={() => {
                        if (button === '=') {
                            calculateResult();
                        } else if (button === 'C') {
                            clearDisplay();
                        } else {
                            appendToDisplay(button);
                        }
                    }}>
                        {button}
                    </button>
                ))}
                <button id="chincuanco" onClick={showName}>Chincuanco</button>
            </div>
        </div>
    );
};

export default App;
