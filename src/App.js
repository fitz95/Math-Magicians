import { Routes, Route } from 'react-router-dom';
import './App.css';
// import CalculatorUi from './components/Calculator';
import Home from './routes/Home';
import Calculator from './routes/Calculator';
import Quote from './routes/Quote';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  );
}

export default App;
