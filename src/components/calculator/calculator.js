import React, { useState } from 'react';
import './calculator.css';

function Calculator() {
  const [result, setResult] = useState('');

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function handleClear() {
    setResult('');
  }

  function handleBackspace() {
    setResult(result.slice(0, -1));
  }

  function handleCalculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  }

  return (
    <>
    <h2 className='heading'>Calculator</h2>
    <div className="calculator">
      
      <div className="display">{result}</div>
      <div className="keys">
        <button className="key clear" onClick={handleClear}>AC</button>
        <button className="key backspace" onClick={handleBackspace}>C</button>
        <button className="key operator" name="/" onClick={handleClick}>÷</button>
        <button className="key" name="7" onClick={handleClick}>7</button>
        <button className="key" name="8" onClick={handleClick}>8</button>
        <button className="key" name="9" onClick={handleClick}>9</button>
        <button className="key operator" name="*" onClick={handleClick}>×</button>
        <button className="key" name="4" onClick={handleClick}>4</button>
        <button className="key" name="5" onClick={handleClick}>5</button>
        <button className="key" name="6" onClick={handleClick}>6</button>
        <button className="key operator" name="-" onClick={handleClick}>−</button>
        <button className="key" name="1" onClick={handleClick}>1</button>
        <button className="key" name="2" onClick={handleClick}>2</button>
        <button className="key" name="3" onClick={handleClick}>3</button>
        <button className="key operator" name="+" onClick={handleClick}>+</button>
        <button className="key zero" name="0" onClick={handleClick}>0</button>
        <button className="key" name="." onClick={handleClick}>.</button>
        <button className="key equal" onClick={handleCalculate}>=</button>
      </div>
    </div>
    </>
  );
}

export default Calculator;
