import React from 'react';
import type { Bus } from '../services/busService';

interface BusRowProps {
  bus: Bus;
}

const BusRow: React.FC<BusRowProps> = ({ bus }) => {
  return (
    <tr>
      <td>{bus.id}</td>
      <td>{bus.placa}</td>
      <td>{bus.caracteristicas}</td>
      <td>{bus.activo ? 'Sí' : 'No'}</td>
      <td>{bus.marca?.nombre}</td>
      <td>{new Date(bus.fechaCreacion).toLocaleString()}</td>
    </tr>
  );
};

export default BusRow;
