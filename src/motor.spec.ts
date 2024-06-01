//import { vi } from 'vitest';
import { comprobarNumero } from './motor';
import { Estado } from './modelo';

describe('comprobarNumero', () => {
  it('puntuacion === 7.5 => estado  es WIN', () => {
    //Arrange
    const estadoEsperado: Estado = 'WIN';
    const puntuacion: number = 7.5;
    //vi.spyOn(puntuacion, 'comprobarNumero', 'get').mockReturnValue(7.5);
    //Act
    const win = comprobarNumero(puntuacion);
    //Assert
    expect(win).toBe(estadoEsperado);
  });

  it('puntuacion > 7.5 => estado  es GAMEOVER', () => {
    //Arrange
    const estadoEsperado: Estado = 'GAMEOVER';
    const puntuacion: number = 10;
    //Act
    const win = comprobarNumero(puntuacion);
    //Assert
    expect(win).toBe(estadoEsperado);
  });

  it('puntuacion <= 4 estado  es CONSERVADOR', () => {
    //Arrange
    const estadoEsperado: Estado = 'CONSERVADOR';
    const puntuacion: number = 3;
    //Act
    const win = comprobarNumero(puntuacion);
    //Assert
    expect(win).toBe(estadoEsperado);
  });

  it('puntuacion > 4 && puntuacion < 6  es CAGADO', () => {
    //Arrange
    const estadoEsperado: Estado = 'CAGADO';
    const puntuacion: number = 5;
    //Act
    const win = comprobarNumero(puntuacion);
    //Assert
    expect(win).toBe(estadoEsperado);
  });

  it('puntuacion >= 6 && puntuacion < 7.5  es CASI', () => {
    //Arrange
    const estadoEsperado: Estado = 'CASI';
    const puntuacion: number = 6;
    //Act
    const win = comprobarNumero(puntuacion);
    //Assert
    expect(win).toBe(estadoEsperado);
  });
});
