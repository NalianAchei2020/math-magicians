import React from 'react';
import './calculator.css';

function Calculator() {
  return (
    <div>
      <div className="calculator">
        <table>
          <tbody>
            <tr>
              <td>
                <input type="text" value={0} readOnly />
              </td>
            </tr>
            <tr>
              <td>
                <button type="button">AC</button>
              </td>
              <td>
                <button type="button">+/-</button>
              </td>
              <td>
                <button type="button">%</button>
              </td>
              <td>
                <button type="button">{String.fromCharCode(247)}</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button">7</button>
              </td>
              <td>
                <button type="button">8</button>
              </td>
              <td>
                <button type="button">9</button>
              </td>
              <td>
                <button type="button">x</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button">4</button>
              </td>
              <td>
                <button type="button">5</button>
              </td>
              <td>
                <button type="button">6</button>
              </td>
              <td>
                <button type="button">-</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button">1</button>
              </td>
              <td>
                <button type="button">2</button>
              </td>
              <td>
                <button type="button">3</button>
              </td>
              <td>
                <button type="button">+</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button">0</button>
              </td>
              <td>
                <button type="button"> </button>
              </td>
              <td>
                <button type="button">=</button>
              </td>
              <td>
                <button type="button">{String.fromCharCode(247)}</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calculator;
