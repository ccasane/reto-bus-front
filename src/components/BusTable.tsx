import React, { useEffect, useState } from 'react';
import type { Bus } from '../services/busService';
import { getBuses } from '../services/busService';
import BusRow from '../components/BusRow';
import '../styles/BusTable.scss';

const BusTable: React.FC = () => {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getBuses()
      .then(setBuses)
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <table className="bus-table">
      <thead>
        <tr>
          <th>Número</th>
          <th>Placa</th>
          <th>Características</th>
          <th>Activo</th>
          <th>Marca ID</th>
          <th>Fecha Creación</th>
        </tr>
      </thead>
      <tbody className="bus-row">
        {buses.map(bus => (
          <BusRow key={bus.id} bus={bus} />
        ))}
      </tbody>
    </table>
  );
};

export default BusTable;
