import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
