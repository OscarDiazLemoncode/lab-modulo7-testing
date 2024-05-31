//import { vi } from 'vitest';
import { comprobarNumero } from './motor';
import { Estado } from './modelo';

describe('comprobarNumero', () => {
  it('puntuacion === 7.5 => estado  es WIN', () => {
    //Arrange
    const estadoEsperado: Estado = 'WIN';
    const puntuacion: number = 7.5;
    //Act
    const win = comprobarNumero(puntuacion);
    //Assert
    expect(win).toBe(estadoEsperado);
  });
});
