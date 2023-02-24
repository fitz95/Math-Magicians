import './Calculator.css';
import { useState } from 'react';
import calculate from '../logic/calculate';

function CalculatorUi() {
  const [calState, setCalState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const onClickHandler = (e) => {
    setCalState((calState) => calculate(calState, e.target.value));
  };
  return (
    <div className="calculator">
      {calState.next !== null ? (
        <div type="text" className="calculator-screen">
          {calState.next}
        </div>
      ) : (
        <div type="text" className="calculator-screen">
          {calState.total}
        </div>
      )}
      <div className="calbtn">
        <button type="button" onClick={onClickHandler} value="AC">
          AC
        </button>
        <button type="button" onClick={onClickHandler} value="+/-">
          +/-
        </button>
        <button type="button" onClick={onClickHandler} value="%">
          %
        </button>
        <button
          type="button"
          className="operator"
          onClick={onClickHandler}
          value="÷"
        >
          &divide;
        </button>

        <button type="button" onClick={onClickHandler} value="7">
          7
        </button>
        <button type="button" onClick={onClickHandler} value="8">
          8
        </button>
        <button type="button" onClick={onClickHandler} value="9">
          9
        </button>
        <button
          type="button"
          onClick={onClickHandler}
          className="operator"
          value="x"
        >
          &times;
        </button>

        <button type="button" onClick={onClickHandler} value="4">
          4
        </button>
        <button type="button" onClick={onClickHandler} value="5">
          5
        </button>
        <button type="button" onClick={onClickHandler} value="6">
          6
        </button>
        <button
          type="button"
          className="operator"
          onClick={onClickHandler}
          value="-"
        >
          -
        </button>

        <button type="button" onClick={onClickHandler} value="1">
          1
        </button>
        <button type="button" onClick={onClickHandler} value="2">
          2
        </button>
        <button type="button" onClick={onClickHandler} value="3">
          3
        </button>
        <button
          type="button"
          onClick={onClickHandler}
          className="operator"
          value="+"
        >
          +
        </button>

        <button
          type="button"
          className="zero-btn"
          onClick={onClickHandler}
          value="0"
        >
          0
        </button>
        <button
          type="button"
          onClick={onClickHandler}
          className="decimal"
          value="."
        >
          .
        </button>
        <button
          type="button"
          className="operator"
          onClick={onClickHandler}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}
export default CalculatorUi;
