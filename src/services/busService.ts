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
const BASE_URL = '/bus';

export const getBuses = async (): Promise<Bus[]> => {
  const response = await fetch(BASE_URL, {
    headers: {
      Authorization: 'Basic ' + btoa('user:password123'),
    },
  });
  if (!response.ok) {
    throw new Error('Error al obtener los buses');
  }
  const data = await response.json();
  return data.content || data;
};
