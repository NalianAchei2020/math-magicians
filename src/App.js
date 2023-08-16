import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Qoutes from './components/qoutes';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/qoutes" element={<Qoutes />} />
        </Routes>
      </Router>
      <Calculator />
      <Qoutes />
    </div>
  );
}

export default App;
