import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/merncalculate';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [storedValue, setStoredValue] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleButtonClick = (button) => {
    const newData = calculate(storedValue, button);
    setStoredValue(newData);
    setDisplayValue(newData.next || newData.total || '0');
  };
  return (
    <div>
      <div className="container calculator">
        <div>
          <h2 className="doMath">Let&apos;s do some math!</h2>
        </div>
        <table>
          <tbody>
            <tr className="inputNum">
              <td colSpan={4}>
                <input type="text" value={displayValue} readOnly />
              </td>
            </tr>
            <tr>
              <td className="gold">
                <button
                  type="button"
                  className="gold"
                  onClick={() => handleButtonClick('AC')}
                >
                  AC
                </button>
              </td>
              <td className="gold">
                <button
                  type="button"
                  className="gold"
                  onClick={() => handleButtonClick('+/-')}
                >
                  +/-
                </button>
              </td>
              <td className="gold">
                <button
                  type="button"
                  className="gold"
                  onClick={() => handleButtonClick('%')}
                >
                  %
                </button>
              </td>
              <td className="Ngold">
                <button
                  type="button"
                  className="Ngold"
                  onClick={() => handleButtonClick('÷')}
                >
                  {String.fromCharCode(247)}
                </button>
              </td>
            </tr>
            <tr>
              <td className="gold">
                <button
                  type="button"
                  className="gold"
                  onClick={() => handleButtonClick('7')}
                >
                  7
                </button>
              </td>
              <td className="gold">
                <button
                  type="button"
                  className="gold"
                  onClick={() => handleButtonClick('8')}
                >
                  8
                </button>
              </td>
              <td className="gold">
                <button
                  type="button"
                  className="gold"
                  onClick={() => handleButtonClick('9')}
                >
                  9
                </button>
              </td>
              <td className="Ngold">
                <button
                  type="button"
                  className="Ngold"
                  onClick={() => handleButtonClick('x')}
                >
                  x
                </button>
              </td>
            </tr>
            <tr>
              <td className="gold">
                <button
                  type="button"
                  className="gold"
                  onClick={() => handleButtonClick('4')}
                >
                  4
                </button>
              </td>
              <td className="gold">
                <button
                  type="button"
                  className="gold"
                  onClick={() => handleButtonClick('5')}
                >
                  5
                </button>
              </td>
              <td className="gold">
                <button
                  type="button"
                  className="gold"
                  onClick={() => handleButtonClick('6')}
                >
                  6
                </button>
              </td>
              <td className="Ngold">
                <button
                  type="button"
                  className="Ngold"
                  onClick={() => handleButtonClick('-')}
                >
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td className="gold">
                <button
                  type="button"
                  className="gold"
                  onClick={() => handleButtonClick('1')}
                >
                  1
                </button>
              </td>
              <td className="gold">
                <button
                  type="button"
                  className="gold"
                  onClick={() => handleButtonClick('2')}
                >
                  2
                </button>
              </td>
              <td className="gold">
                <button
                  type="button"
                  className="gold"
                  onClick={() => handleButtonClick('3')}
                >
                  3
                </button>
              </td>
              <td className="Ngold">
                <button
                  type="button"
                  className="Ngold"
                  onClick={() => handleButtonClick('+')}
                >
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="gold">
                <button
                  type="button"
                  className="gold zero"
                  onClick={() => handleButtonClick('0')}
                >
                  0
                </button>
              </td>
              <td className="gold">
                <button
                  type="button"
                  className="gold dot"
                  onClick={() => handleButtonClick('.')}
                >
                  .
                </button>
              </td>
              <td className="Ngold">
                <button
                  type="button"
                  className="Ngold"
                  onClick={() => handleButtonClick('=')}
                >
                  =
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calculator;
