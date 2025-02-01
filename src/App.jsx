import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout"
import LandingPage from "./components/LandingPage"
import Help from './components/Help';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UpdateAlert from './components/UpdateAlert';
import DisasterAlerts from './components/DisasterAlerts';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/update-alert" element={<UpdateAlert />} />
          <Route path="/disaster-alerts" element={<DisasterAlerts />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
