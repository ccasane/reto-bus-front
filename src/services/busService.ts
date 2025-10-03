export interface Marca {
  id: number;
  nombre: string;
}

export interface Bus {
  id: number;
  numeroBus: string;
  placa: string;
  caracteristicas: string;
  activo: boolean;
  fechaCreacion: string;
  marca: Marca;
}

export interface BusPage {
  content: Bus[];
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
}

const BASE_URL = '/bus';

export const getBusesPage = async (page: number = 0, size: number = 5): Promise<BusPage> => {
  const response = await fetch(`${BASE_URL}?page=${page}&size=${size}`, {
    headers: {
      Authorization: 'Basic ' + btoa('user:password123'),
    },
  });

  if (!response.ok) {
    throw new Error('Error al obtener los buses');
  }

  return await response.json();
};
