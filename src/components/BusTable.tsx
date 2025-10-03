import React, { useEffect, useState } from 'react';
import type { Bus, BusPage } from '../services/busService';
import { getBusesPage } from '../services/busService';
import BusRow from '../components/BusRow';
import '../styles/BusTable.scss';

const BusTable: React.FC = () => {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getBusesPage(page, 4)
      .then((data: BusPage) => {
        setBuses(data.content);
        setTotalPages(data.totalPages);
      })
      .catch(err => setError(err.message));
  }, [page]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <table className="bus-table">
        <thead>
          <tr>
            <th>Número</th>
            <th>Placa</th>
            <th>Características</th>
            <th>Activo</th>
            <th>Marca</th>
            <th>Fecha Creación</th>
          </tr>
        </thead>
        <tbody className="bus-row">
          {buses.map(bus => (
            <BusRow key={bus.id} bus={bus} />
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => setPage(p => p - 1)} disabled={page === 0}>
          ◀ Anterior
        </button>
        <span>
          Página {page + 1} de {totalPages}
        </span>
        <button onClick={() => setPage(p => p + 1)} disabled={page === totalPages - 1}>
          Siguiente ▶
        </button>
      </div>
    </div>
  );
};

export default BusTable;
