import React from 'react';

const SettingsPage = () => {
  return (
    <div>
      <h2>Configurações</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Preferências</h5>
          <div className="form-check form-switch mb-3">
            <input className="form-check-input" type="checkbox" id="darkMode" />
            <label className="form-check-label" htmlFor="darkMode">Modo Escuro</label>
          </div>
          <div className="form-check form-switch mb-3">
            <input className="form-check-input" type="checkbox" id="notifications" />
            <label className="form-check-label" htmlFor="notifications">Notificações</label>
          </div>
          <button className="btn btn-primary">Salvar Configurações</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;