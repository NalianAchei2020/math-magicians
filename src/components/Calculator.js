import React from 'react';
import './calculator.css';
import CalculatorInput from './calculatorInput';

function Calculator() {
  return (
    <div>
      <div className="calculator">
        <table>
          <tbody>
            <tr className="inputNum">
              <td colSpan={4}>
                <CalculatorInput />
              </td>
            </tr>
            <tr>
              <td className="gold">
                <button type="button" className="gold">
                  AC
                </button>
              </td>
              <td className="gold">
                <button type="button" className="gold">
                  +/-
                </button>
              </td>
              <td className="gold">
                <button type="button" className="gold">
                  %
                </button>
              </td>
              <td className="Ngold">
                <button type="button" className="Ngold">
                  {String.fromCharCode(247)}
                </button>
              </td>
            </tr>
            <tr>
              <td className="gold">
                <button type="button" className="gold">
                  7
                </button>
              </td>
              <td className="gold">
                <button type="button" className="gold">
                  8
                </button>
              </td>
              <td className="gold">
                <button type="button" className="gold">
                  9
                </button>
              </td>
              <td className="Ngold">
                <button type="button" className="Ngold">
                  x
                </button>
              </td>
            </tr>
            <tr>
              <td className="gold">
                <button type="button" className="gold">
                  4
                </button>
              </td>
              <td className="gold">
                <button type="button" className="gold">
                  5
                </button>
              </td>
              <td className="gold">
                <button type="button" className="gold">
                  6
                </button>
              </td>
              <td className="Ngold">
                <button type="button" className="Ngold">
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td className="gold">
                <button type="button" className="gold">
                  1
                </button>
              </td>
              <td className="gold">
                <button type="button" className="gold">
                  2
                </button>
              </td>
              <td className="gold">
                <button type="button" className="gold">
                  3
                </button>
              </td>
              <td className="Ngold">
                <button type="button" className="Ngold">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="gold">
                <button type="button" className="gold zero">
                  0
                </button>
              </td>
              <td className="gold">
                <button type="button" className="gold dot">
                  .
                </button>
              </td>
              <td className="Ngold">
                <button type="button" className="Ngold">
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
