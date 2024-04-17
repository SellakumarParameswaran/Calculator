import React, { useState } from 'react';
import './SciFiCalculator.css'; // Import CSS for styling

const SciFiCalculator = () => {
  const [displayValue, setDisplayValue] = useState('0');

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (value === '=') {
      evaluateExpression();
    } else if (value === 'C') {
      clearDisplay();
    } else {
      // Update the display value
      setDisplayValue(displayValue === '0' ? value : displayValue + value);
    }
  };

  // Function to clear the display
  const clearDisplay = () => {
    setDisplayValue('0');
  };

  // Function to evaluate the expression
  const evaluateExpression = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="scifi-calculator">
      <input type="text" value={displayValue} readOnly />
      <div className="buttons">
        <button className="clear-btn" onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button className="eval-btn" onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('%')}>%</button>
        <button onClick={() => handleButtonClick('mod')}>mod</button>
      </div>
    </div>
  );
};

export default SciFiCalculator;
