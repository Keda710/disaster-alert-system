import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UpdateAlert from './components/UpdateAlert';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update-alert" element={<UpdateAlert />} />
      </Routes>
    </Router>
  );
}

export default App;
