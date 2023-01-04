export interface Jugador {
  id: number;
  nombre: string;
  apellido: string;
  posicion: string;
  equipo: string;
  imagen?: string;
}

export const POSICIONES = [
  "arquero",
  "defensor",
  "mediocampista",
  "delantero"
]
