// Puntuación inicial
//export let puntuacion = 0;
interface Puntuacion {
  puntuacion: number;
}
// Al estar 'puntuacion' dentro de interface (como hijo) nos deja modificar su valor
export const puntuacionInicial: Puntuacion = {
  puntuacion: 0,
};

// Genera nº aleatorio del 1 al 10
export const crearNumAleatorio = () => {
  const numero = Math.ceil(Math.random() * 10);
  return numero;
};

// Estructura con los estados en funcion de la puntuación
export type Estado =
  | 'CONSERVADOR'
  | 'CAGADO'
  | 'CASI'
  | 'WIN'
  | 'GAMEOVER'
  | 'NULO';

// Variables con valor de cada carta
export enum TipoCarta {
  AS = 1,
  DOS = 2,
  TRES = 3,
  CUATRO = 4,
  CINCO = 5,
  SEIS = 6,
  SIETE = 7,
  SOTA = 8,
  CABALLO = 9,
  REY = 10,
}
