import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';
import CreateOrderPage from './pages/CreateOrderPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar expanded={sidebarExpanded} toggleSidebar={toggleSidebar} />
        <div className={`main-content ${sidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>

          {/* <header className="main-header"> */}
          {/* <h1>Meu Aplicativo</h1> */}
          {/* <div className="user-controls"> */}
          {/* <span className="user-name">Usuário</span> */}
          {/* <i className="bi bi-person-circle"></i> */}
          {/* </div> */}
          {/* </header> */}
          <div className="content-area">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              {/* <Route path="/profile" element={<ProfilePage />} /> */}
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/orders" element={<CreateOrderPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;