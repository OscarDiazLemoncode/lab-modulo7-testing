import { Estado, TipoCarta } from './modelo';

// Calcula valor carta que se mostrará como puntuación
// Argumento es numAleatorio = crearNumAleatorio()
export const calculaValorCarta = (numAleatorio: number) => {
  if (numAleatorio <= 7) {
    return numAleatorio;
  } else {
    return 0.5;
  }
};

// Calcula nº de la carta
// Argumento  numAleatorio = crearNumAleatorio()
export const calculaNumCarta = (numAleatorio: number) => {
  if (numAleatorio <= 7) {
    return numAleatorio;
  } else {
    return (numAleatorio += 2);
  }
};

// Muestra carta con url
export const urlCarta = (numCarta: number) => {
  switch (numCarta) {
    case TipoCarta.AS:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg';
      break;
    case TipoCarta.DOS:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg';
      break;
    case TipoCarta.TRES:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg';
      break;
    case TipoCarta.CUATRO:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg';
      break;
    case TipoCarta.CINCO:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg';
      break;
    case TipoCarta.SEIS:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg';
      break;
    case TipoCarta.SIETE:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg';
      break;
    case TipoCarta.SOTA:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg';
      break;
    case TipoCarta.CABALLO:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg';
      break;
    case TipoCarta.REY:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg';
      break;
    default:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
      break;
  }
};

// Comprueba puntuación y asigna un estado cubriendo todos los rangos
export const comprobarNumero = (puntuacion: number): Estado => {
  switch (true) {
    case puntuacion <= 4:
      return 'CONSERVADOR';
      break;
    case puntuacion > 4 && puntuacion < 6:
      return 'CAGADO';
      break;
    case puntuacion >= 6 && puntuacion < 7.5:
      return 'CASI';
      break;
    case puntuacion === 7.5:
      return 'WIN';
      break;
    case puntuacion > 7.5:
      return 'GAMEOVER';
      break;
    default:
      return 'NULO';
      break;
  }
};
