import React from 'react';

const DashboardPage = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Estatísticas</h5>
              <p>Visualize seus dados importantes aqui.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Atividades Recentes</h5>
              <p>Atividades dos últimos 7 dias.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;