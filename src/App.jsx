import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout"
import LandingPage from "./components/LandingPage"
import Help from './components/Help';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
