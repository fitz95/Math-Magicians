import Navbar from '../components/Navbar';
import CalculatorUi from '../components/Calculator';

function Calculator() {
  return (
    <>
      <Navbar />
      <div className="caldiv">
        <h1>Lets do Some Maths</h1>
        <CalculatorUi />
      </div>
    </>
  );
}

export default Calculator;
