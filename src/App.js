import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './containers/Home';
import Header from './containers/Header';
import Checkout from './containers/Checkout';
import Login from './containers/Login';
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
