import React, { useEffect, useState } from "react";
import axios from "axios";

const OdersAll = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/orders")
      .then(response => setOrders(response.data))
      .catch(error => console.error("Erro ao buscar os pedidos:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Pedidos</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.name} - Entrega: {order.date_entrega}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OdersAll;