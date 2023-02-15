import './Calculator.css';

const CalculatorUi = () => (
  <div className="calculator">

    <input type="text" className="calculator-screen" value="0" disabled />

    <div className="calbtn">

      <button type="button" value="AC">AC</button>
      <button type="button" value="+/-">+/-</button>
      <button type="button" value="%">%</button>
      <button type="button" className="operator" value="+">&divide;</button>

      <button type="button" value="7">7</button>
      <button type="button" value="8">8</button>
      <button type="button" value="9">9</button>
      <button type="button" className="operator" value="x">&times;</button>

      <button type="button" value="4">4</button>
      <button type="button" value="5">5</button>
      <button type="button" value="6">6</button>
      <button type="button" className="operator" value="2">-</button>

      <button type="button" value="1">1</button>
      <button type="button" value="2">2</button>
      <button type="button" value="3">3</button>
      <button type="button" className="operator" value="all-clear">+</button>

      <button type="button" className="zero-btn" value="0">0</button>
      <button type="button" className="decimal" value=".">.</button>
      <button type="button" className="operator" value="=">=</button>

    </div>
  </div>
);

export default CalculatorUi;
