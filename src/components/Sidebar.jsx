
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Sidebar = ({ expanded, toggleSidebar }) => {
  return (
    <div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-header">
        <h3>{expanded ? 'Menu' : ''}</h3>
        <button className="btn btn-link toggle-btn" onClick={toggleSidebar}>
          {expanded ? '<<' : '>>'}
        </button>
      </div>
      <Nav className="flex-column">
        <Nav.Item>
          <Link to="/" className="sidebar-item nav-link">
            <i className="bi bi-house-door"></i>
            {expanded && <span className="ms-2">Início</span>}
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/dashboard" className="sidebar-item nav-link">
            <i className="bi bi-speedometer2"></i>
            {expanded && <span className="ms-2">Dashboard</span>}
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link to="/orders" className="sidebar-item nav-link">
            <i className="bi bi-speedometer2"></i>
            {expanded && <span className="ms-2">Pedidos</span>}
          </Link>
        </Nav.Item>





        <Nav.Item>
          <Link to="/profile" className="sidebar-item nav-link">
            <i className="bi bi-person"></i>
            {expanded && <span className="ms-2">Perfil</span>}
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/settings" className="sidebar-item nav-link">
            <i className="bi bi-gear"></i>
            {expanded && <span className="ms-2">Configurações</span>}
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;